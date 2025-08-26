import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // to show feedback

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);

      if (res.data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // reset form
      } else {
        setStatus("⚠️ Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error sending message. Please try later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md space-y-5"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Me</h2>
        <p className="text-gray-600 text-center">
          Have a question or want to work together? Send me a message!
        </p>

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        {/* Message */}
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={5}
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl font-semibold transition duration-300"
        >
          Send Message
        </button>

        {/* Status Message */}
        {status && <p className="text-center mt-3 text-sm text-gray-700">{status}</p>}
      </form>
    </div>
  );
}
