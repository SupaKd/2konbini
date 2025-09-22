// src/components/Galerie.jsx
import { motion } from "framer-motion";

const galerieData = [
  {
    id: 1,
    title: "Plats préparés",
    image: "/platpre.png",
  },
  {
    id: 2,
    title: "Coin Épicerie",
    image: "/c.jpeg",
  },
  {
    id: 3,
    title: "Goodies",
    image: "/funko.jpeg",
  },
  
  {
    id: 4,
    title: "Espace immersife",
    image: "/d.jpeg",
  },
];

function Galerie() {
  return (
    <section className="galerie">
      <h2 className="galerie__title">Découvrez notre Konbini</h2>
      <div className="galerie__grid">
        {galerieData.map((item) => (
          <motion.div
            key={item.id}
            className="galerie__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.title} className="galerie__image" />
            <div className="galerie__overlay">
              <h3 className="galerie__name">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Galerie;
