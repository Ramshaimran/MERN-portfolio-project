export default function About() {
  return (
    <section className="w-full max-w-6xl px-6 py-10 mx-auto bg-white text-gray-900">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>

      {/* Education */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Education</h3>
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <p className="font-semibold">2021 – 2024 | CGPA: 3.43</p>
          <p className="mt-2">Jinnah University for Women — BS in Software Engineering</p>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
        <div className="space-y-6">
          {/* Smart Debriefing */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="font-bold">Smart Debriefing at TCS – Customer Service Representative</h4>
            <p className="text-gray-500 text-sm">Nov 2022 – Dec 2022</p>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Resolved inquiries efficiently, contributing to positive customer satisfaction scores.</li>
              <li>Delivered exceptional customer service, resolving 95% of customer issues in the first call.</li>
              <li>Collaborated with team to improve call handling efficiency by 20%.</li>
            </ul>
          </div>

          {/* Tweaks and Tucks */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="font-bold">Tweaks and Tucks – Co-Founder</h4>
            <p className="text-gray-500 text-sm">Mar 2023 – Present</p>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Established a fashion and lifestyle startup focusing on quality, style, and customer experience.</li>
              <li>Managed brand presence, online marketing, and product launches.</li>
            </ul>
          </div>

          {/* Aptech Learning */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="font-bold">Aptech Learning – Lecturer</h4>
            <p className="text-gray-500 text-sm">Oct 2023 – Present</p>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Deliver lectures on web development, backend programming, and databases.</li>
              <li>Design curriculum, evaluate student performance, and collaborate with faculty to enhance learning outcomes.</li>
              <li>Provide hands-on training in HTML, CSS, JavaScript, PHP, ASP.NET, SQL Server, and MySQL.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hard Skills */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="font-bold mb-2">Hard Skills</h4>
            <p>Frontend: HTML, CSS, JavaScript, Bootstrap, Angular, jQuery</p>
            <p>Backend: Python, Flask, PHP, ASP.NET, Laravel</p>
            <p>Database: SQL, MySQL</p>
            <p>Cross-Platform / Mobile: Flutter</p>
            <p>Tools & Others: Microsoft Word, PowerPoint, Excel, Figma</p>
          </div>

          {/* Soft Skills */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h4 className="font-bold mb-2">Soft Skills</h4>
            <ul className="list-disc list-inside">
              <li>Creative</li>
              <li>Adaptability</li>
              <li>Quick Learner</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </div>
           {/* Certifications */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Project Management Essentials Certified</li>
            <li>AWS Academy Cloud Foundations</li>
            <li>Scrum Foundation Professional Certification - SFPC</li>
            <li>AWS Academy Data Engineering</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
