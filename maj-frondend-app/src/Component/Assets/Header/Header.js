
import { useState, useEffect } from "react";
import Logo from "../../Images/images-removebg-preview.png";
 import Mobilelog from '../../Images/mobile-headerlogo.png'
import "./Header.css";
import useMediaQuery from "../UseMediaQuery/UseMediaQuery";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([{ name: "Home", link: "/" },
    { name: "Products", link: "products" },
    { name: "Clients", link: "clients" },
    { name: "Contact Us", link: "location" },]);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery('(max-width: 700px)');
  // Header animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling while drawer is open
  useEffect(() => {
    if (!isDrawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDrawerOpen]);

  // Fetch menu items
  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/headermenu")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch menu");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setMenuItems(data.data ?? []))
  //     .catch((error) =>
  //       console.error("Error fetching menu items:", error)
  //     );
  // }, []);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header
        className={`header ${isScrolled ? "scrolled" : ""}`}
      >
        {isMobile?<>
        <button
          className="menu-btn"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open menu"
          aria-expanded={isDrawerOpen}
          aria-controls="mobile-drawer"
        >
          ☰
        </button>
        <a className="logo" href="/" aria-label="Home">
          <img src={Mobilelog} alt="Logo" />
        </a>
        </>:<>
         <a className="logo" href="/" aria-label="Home">
          <img src={Logo} alt="Logo" />
        </a>

        <nav className="desktop-nav">
          {menuItems.map((item) => (
            <a key={item.name} href={item.link}>
              {item.name}
            </a>
          ))}
        </nav>
        </>
       }

        
      </header>

      {isDrawerOpen && (
        <div
          className="drawer-overlay"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      <aside
        id="mobile-drawer"
        className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`}
        aria-hidden={!isDrawerOpen}
        inert={!isDrawerOpen}
      >
        <div className="drawer-header">
          <a className="logo" href="/" onClick={closeDrawer}>
            <img src={Logo} alt="Logo" />
          </a>

          <button
            className="close-btn"
            onClick={closeDrawer}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className="mobile-nav">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={closeDrawer}
              tabIndex={isDrawerOpen ? 0 : -1}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Header;
