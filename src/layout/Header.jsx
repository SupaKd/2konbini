import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faXmark,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`header  ? "scrolled" : ""}`}>
      <Link
        className={`burger ${isOpen ? "rotate" : ""}`}
        onClick={toggleMenu}
        aria-label="Menu mobile"
        aria-expanded={isOpen}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBarsStaggered} />
      </Link>

      <Link to="/" onClick={closeMenu} className="logo_mobile">
        <img src="/logo2025.png" alt="Logo" />
      </Link>
      <Link to="/" onClick={closeMenu} className="logo_desktop">
        <img src="/logo2025.png" alt="Logo" />
      </Link>

      <nav
        className={`header__nav ${isOpen ? "show" : ""}`}
        aria-label="Navigation principale"
      >
        <NavLink to="/" className="btn btn--red" onClick={closeMenu}>
          <img src="/uber.png" alt="" />
        </NavLink>
        <NavLink to="/panier" className="btn btn--cart" onClick={closeMenu}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </NavLink>
        <NavLink to="/" className="btn btn--blue" onClick={closeMenu}>
          Click & collect
        </NavLink>
        <NavLink to="/" className="btn btn--green" onClick={closeMenu}>
          Evenements
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
