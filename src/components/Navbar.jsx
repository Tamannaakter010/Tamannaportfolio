import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation items
  const navItems = (
    <>
      <li>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
      </li>
      <li>
        <Link to="/skills" onClick={closeMenu}>
          Skills
        </Link>
      </li>
      <li>
        <Link to="/projects" onClick={closeMenu}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="/education" onClick={closeMenu}>
          Education
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </li>
      <li>
        <Link to="/reachme" onClick={closeMenu}>
          Reach Me
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-700 text-white shadow-lg fixed top-0 z-50">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Tamanna <span className="text-blue-600 font-bold">A</span>kter
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="p-2 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 w-full bg-gray-700 text-white transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="menu p-4">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;