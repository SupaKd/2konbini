import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
   
        <div className="footer__top">

          <div>
            <img src="/logo2025.png" alt="logo" />
          </div>
          <div className="informations">
            <h2>Nos horaires</h2>
            <p><strong>Lundi au Vendredi :</strong> 10h00 - 22h00</p><p><strong>Samedi :</strong> 10h00 - 22h00</p>
          </div>

          <nav className="nav">
            <Link to="/">À propos</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Mentions légales</Link>
          </nav>

          <div className="social">
      <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedinIn />
      </a>
    </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} 2onbini. Tous droits réservés.</p>
        </div>
    </footer>
  );
}

export default Footer;