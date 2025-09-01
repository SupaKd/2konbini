// src/components/Products.jsx
import { useState, useMemo } from "react";

const CATEGORIES = [
  { id: "all", name: "Tout" },
  { id: "snacks", name: "Snacks" },
  { id: "boissons", name: "Boissons" },
  { id: "bentos", name: "Bentos" },
];

const DATA = [
  { id: 1, name: "Pocky Fraise", price: 2.5, category: "snacks", image: "/ramune.webp" },
  { id: 2, name: "Chips Wasabi", price: 3.0, category: "snacks", image: "ramune.webp" },
  { id: 3, name: "Ramune Soda", price: 2.0, category: "boissons", image: "ramune.webp" },
  { id: 4, name: "Thé Vert Matcha", price: 2.2, category: "boissons", image: "ramune.webp" },
  { id: 5, name: "Bento Poulet", price: 8.5, category: "bentos", image: "ramune.webp" },
  { id: 6, name: "Bento Saumon", price: 9.0, category: "bentos", image: "ramune.webp" },
];

function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const products = useMemo(() => {
    if (activeCategory === "all") return DATA;
    return DATA.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="products" aria-labelledby="products-title">
      <h2 id="products-title" className="products__title">Catégories de produits</h2>

      <div className="products__categories" role="tablist" aria-label="Catégories">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeCategory === cat.id}
            className={`products__category ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="products__grid">
        {products.map(p => (
          <article key={p.id} className="product__card">
            <img src={p.image} alt={p.name} className="product__image" loading="lazy" />
            <div className="product__overlay" aria-hidden="true" />
            <div className="product__content">
              <h3 className="product__name">{p.name}</h3>
              <p className="product__price">{p.price.toFixed(2)} €</p>
              <button className="product__btn" type="button" aria-label={`Ajouter ${p.name} au panier`}>
                Ajouter au panier
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
