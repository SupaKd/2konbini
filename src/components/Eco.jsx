import React from "react";

function Eco() {
    return(
        <>
            <section className="eco-section" aria-labelledby="eco-title">
                <div className="eco-section__inner">
                    <h2 id="eco-title" className="eco-section__title">Engagement Écoresponsable</h2>

                    <p className="eco-section__lead">Dans notre konbini, nous faisons attention à l’impact de nos emballages.</p>

                    <ul className="eco-section__list">
                        <li>
                            <strong>Réduction des déchets :</strong> nos emballages limitent le plastique et favorisent les matières recyclables.
                        </li>

                        <li>
                            <strong>Gobelets réutilisables :</strong> gobelets à notre marque. Réduction à chaque réutilisation.
                        </li>

                        <li>
                            <strong>Sacs et contenants durables :</strong> possibilité d’acheter ou d’apporter vos propres contenants pour certains produits.
                        </li>

                        <li>
                            <strong>Programme fidélité vert :</strong> chaque geste écoresponsable (gobelet réutilisable, sac réutilisable, pas de couverts jetables) rapporte des points bonus.
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Eco;
