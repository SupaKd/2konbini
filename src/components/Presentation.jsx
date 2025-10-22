import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = ["/vitrine2onbini.png", "/inte.png", "/inte2.png"]; // 🔁 Ajoute ici tes images

function Presentation() {
  const [index, setIndex] = useState(0);

  // ⏱️ Changement d’image toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="presentation">
      <div className="presentation__container">
        {/* Texte à gauche */}
        <div className="presentation__content">
          <h2>
            Bienvenue dans notre <span className="konbini">Konbini</span>
          </h2>
          <p>
            Venez découvrir nos produits asiatiques authentiques et laissez-vous inspirer
            par leurs saveurs uniques.
          </p>
          <button className="presentation__btn">Découvrir nos produits</button>
        </div>

        {/* Slider à droite */}
        <div className="presentation__slider">
          <div className="slider__wrapper">
            <AnimatePresence mode="wait">
              <motion.img
                key={IMAGES[index]}
                src={IMAGES[index]}
                alt="Konbini"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="slider__image"
              />
            </AnimatePresence>
          </div>

          {/* Petits points indicateurs */}
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
