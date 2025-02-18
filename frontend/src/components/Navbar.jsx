import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "ABOUT", path: "/about" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "BLOG", path: "/" },
    { name: "CONTACT", path: "/contact" },
    { name: "EXPERTISE", path: "/expertise" },
    { name: "PRODUCT", path: "/product" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black flex justify-between items-center px-6 md:px-12 py-4 shadow-md z-50 font-[Roboto]">
        <div className="text-xl md:text-2xl font-bold text-white">Logo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-bold">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-white transition duration-300 group"
            >
              {link.name}
              <div className="absolute left-0 bottom-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center space-y-6 z-50 transition-transform font-[Roboto]">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-bold hover:text-blue-600 transition duration-300"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
          <button className="text-red-500 font-bold" onClick={() => setMenuOpen(false)}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
