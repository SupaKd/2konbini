import { motion } from "framer-motion";

const images = [
  "/inte.png",
  "/inte1.png",
  "/inte2.png",
  "/inte.png",
  "/inte1.png",
  "/inte2.png",
];

function ImageCarousel() {
  return (
    <div className="carousel">
      <motion.div
        className="carousel__track"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 100, // desktop: lent
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div className="carousel__item" key={i}>
            <img src={src} alt={`slide-${i}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ImageCarousel;
