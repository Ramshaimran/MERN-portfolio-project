// backend/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ===== MongoDB connection =====
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

// ===== Project Schema =====
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String },
  technologies: { type: [String], default: [] },
});
const Project = mongoose.model("Project", ProjectSchema);

// ===== Contact Schema =====
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Contact = mongoose.model("Contact", ContactSchema);

// ===== Nodemailer Transporter =====
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST, // e.g. smtp.gmail.com
  port: process.env.MAIL_PORT, // e.g. 587
  secure: false, // true if port = 465, false if 587
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// ===== API routes =====

// Get all projects
app.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Add a project
app.post("/api/projects", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

// Submit contact form
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to DB
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Send mail
    await transporter.sendMail({
      from: process.env.MAIL_USER, // sender (your email)
      to: process.env.MAIL_TO,     // receiver (your inbox)
      replyTo: email,              // user's email for replying
      subject: `Portfolio Contact: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.json({ success: true, msg: "Message sent successfully" });
  } catch (err) {
    console.error("❌ Mail error:", err);
    res.status(500).json({ success: false, msg: "Mail failed", error: err });
  }
});

// Test mail route
app.get("/api/test-mail", async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      subject: "Test Email",
      text: "This is a test email",
    });
    res.json({ success: true, msg: "Test email sent" });
  } catch (err) {
    console.error("❌ Mail Error:", err);
    res.status(500).json({ success: false, msg: "Mail failed", error: err });
  }
});

// ===== Start server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
