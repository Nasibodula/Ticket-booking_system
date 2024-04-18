import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <a to="/events">Events <MdKeyboardArrowDown onClick={toggleMenu} /></a>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><Link to="/allevents">All Events</Link></li>
          <li><Link to="/events/attended">Events attended</Link></li>
          <li><Link to="/events/hosted">Events hosted</Link></li>
        </ul>
      )}
    </>
  );
}

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header>
      <span><h1>Event Booking</h1></span>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <DropdownMenu />
        <Link to="/contact">Contact us</Link>
        <Link to="/host">Host</Link>
        <Link to="/landingpage"><button>Log out</button></Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;