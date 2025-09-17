// src/components/Presentation.jsx

function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation__container">
        {/* Texte à gauche */}
        <div className="presentation__content">
          <h2>
            Bienvenue dans notre <span className="konbini">Konbini</span>
          </h2>
          <p>
            Découvrez l’authenticité de l’Asie à travers une sélection variée de
            snacks, boissons et plats préparés chaque jour avec soin. Nous
            mettons à l’honneur les saveurs uniques du Japon, de la Corée du Sud
            et d’autres cultures d’Asie, en associant recettes traditionnelles
            et touches modernes pour vous offrir une expérience gustative qui
            séduit aussi bien les curieux que les passionnés. Que ce soit pour
            une pause rapide, un repas complet ou une découverte culinaire,
            notre konbini est pensé pour répondre à toutes vos envies. Plongez
            dans un univers où la convivialité, la qualité et la fraîcheur sont
            au rendez-vous, et laissez-vous transporter au cœur de l’Asie, le
            temps d’une dégustation.
          </p>
          <button className="presentation__btn">Découvrir nos produits</button>
        </div>

        {/* Image à droite */}
        <div className="presentation__image">
          <img src="/2.jpeg" alt="Intérieur du konbini" />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
