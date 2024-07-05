import React, { useState } from "react";
import { navLinks } from "../constants";
import { menu } from "../assets";
import "../index.css";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = (navTitle, sectionId) => {
    setActive(navTitle);
    const event = new CustomEvent('navigation', { detail: { sectionId } });
    document.dispatchEvent(event);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="brand">
        <h1 className="font-poppins text-2xl font-bold text-white">AstroTrivia</h1>
      </div>

      <button className="toggle-btn" onClick={toggleMenu}>
        <img src={menu} alt="menu" />
      </button>

      <ul className="nav-links">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"}`}
            onClick={() => handleNavLinkClick(nav.title, nav.id)}
          >
            <a href={`#${nav.id}`} className="nav-link">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
