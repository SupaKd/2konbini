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
            Venez découvrir nos produits asiatiques authentiques et laissez-vous inspirer par leurs saveurs uniques.
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
