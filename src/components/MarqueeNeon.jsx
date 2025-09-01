// src/components/MarqueeNeon.jsx
import Marquee from "react-fast-marquee";

function MarqueeNeon() {
  return (
    <div className="marquee">
      <Marquee speed={60} gradient={false}>
        <span className="neonred-text">
          Découvrez l’authenticité japonaise ✦ Snacks ✦ Boissons ✦ Bentos ✦
        </span>
        <span className="neonblue-text">
          Découvrez notre Konbini Concept 
        </span>
      </Marquee>
    </div>
  );
}

export default MarqueeNeon;
