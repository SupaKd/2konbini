// src/components/Hero.jsx
import { memo } from "react";

function Hero() {
  return (
    <section className="hero" aria-label="Image d'accueil du konbini">
      <img
        src="/vitrine2onbini.png"
        alt="Vitrine du konbini"
        className="hero__image"
      />
      <div className="hero__caption">
        <h1>Bienvenue dans notre 2konbini</h1>
      </div>
    </section>
  );
}

export default memo(Hero);
