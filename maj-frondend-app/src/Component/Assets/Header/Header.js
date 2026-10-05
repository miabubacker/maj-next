import React, { useState } from "react";
import Logo from "../../Images/logmaj.jpg";
import "./Header.css";
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Products", link: "#products" },
    { name: "Clients", link: "#clients" },
    { name: "Location", link: "#location" },
    { name: "About Us", link: "#about" },
  ];
  return (
    <>
      {" "}
      <header className="header">
        {" "}
<div className="logo">
  <img src={Logo} alt="Logo" />
</div> {/* Desktop Navigation */}{" "}
        <nav className="desktop-nav">
          {" "}
          {menuItems.map((item) => (
            <a key={item.name} href={item.link}>
              {" "}
              {item.name}{" "}
            </a>
          ))}{" "}
        </nav>{" "}
        {/* Mobile Menu Button */}{" "}
        <button
          className="menu-btn"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open menu"
        >
          {" "}
          ☰{" "}
        </button>{" "}
      </header>{" "}
      {/* Overlay */}{" "}
      {isDrawerOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}{" "}
      {/* Mobile Drawer */}{" "}
      <aside className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`}>
        {" "}
        <div className="drawer-header">
          {" "}
          <div className="logo">
  <img src={Logo} alt="Logo" />
</div>{" "}
          <button
            className="close-btn"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close menu"
          >
            {" "}
            ×{" "}
          </button>{" "}
        </div>{" "}
        <nav className="mobile-nav">
          {" "}
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsDrawerOpen(false)}
            >
              {" "}
              {item.name}{" "}
            </a>
          ))}{" "}
        </nav>{" "}
      </aside>{" "}
    </>
  );
};
export default Header;
