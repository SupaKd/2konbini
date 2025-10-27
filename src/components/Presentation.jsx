import { useState, useEffect } from "react";

const IMAGES = ["/vitrine2onbini.png", "/inte.png", "/inte2.png"];

function Presentation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="presentation">
      <div className="presentation__container">
        {/* Texte */}
        <div className="presentation__text">
          <h1>
            Bienvenue dans notre <span className="highlight">Konbini</span>
          </h1>
          <p>
            Découvrez des produits asiatiques authentiques dans un espace moderne et
            inspirant. Goûtez à l’harmonie entre tradition et innovation.
          </p>
          <button className="btn-primary">Découvrir nos produits</button>
        </div>

        {/* Slider */}
        <div className="presentation__slider">
          <div className="slider__images">
            {IMAGES.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Konbini"
                className={`slider__image ${i === index ? "active" : ""}`}
              />
            ))}
          </div>

          <div className="slider__dots">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
