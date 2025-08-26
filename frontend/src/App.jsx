import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // for hamburger menu
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="bg-gray-900 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-2xl font-bold tracking-wide">My Portfolio</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500 font-semibold border-b-2 border-purple-500"
                    : "hover:text-purple-400 transition"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500 font-semibold border-b-2 border-purple-500"
                    : "hover:text-purple-400 transition"
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500 font-semibold border-b-2 border-purple-500"
                    : "hover:text-purple-400 transition"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-500 font-semibold border-b-2 border-purple-500"
                    : "hover:text-purple-400 transition"
                }
              >
                Contact
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="md:hidden bg-gray-800 px-6 pb-4 space-y-4">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block text-purple-400 font-semibold"
                    : "block hover:text-purple-400 transition"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block text-purple-400 font-semibold"
                    : "block hover:text-purple-400 transition"
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block text-purple-400 font-semibold"
                    : "block hover:text-purple-400 transition"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block text-purple-400 font-semibold"
                    : "block hover:text-purple-400 transition"
                }
              >
                Contact
              </NavLink>
            </div>
          )}
        </nav>

        {/* Page Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-500 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yourusername/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-500 transition"
              >
                LinkedIn
              </a>
              <a
                href="mailto:yourmail@example.com"
                className="hover:text-purple-500 transition"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
