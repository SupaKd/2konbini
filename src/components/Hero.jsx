// src/components/Hero.jsx
import { memo } from "react";

function Hero() {
  return (
    <section className="hero" aria-label="Image d'accueil du konbini">
      <img
        src="/hero5.png"
        alt="Vitrine du konbini"
        className="hero__image"
      />
      <div className="hero__caption">
      </div>
    </section>
  );
}

export default memo(Hero);
