// src/components/Products.jsx
import { useState, useMemo } from "react";

const CATEGORIES = [
  { id: "all", name: "Tout" },
  { id: "snacks", name: "Snacks" },
  { id: "boissons", name: "Boissons" },
  { id: "bentos", name: "Bentos" },
  { id: "goodies", name: "Goodies" },
];

const DATA = [
  { id: 1, name: "Pocky Fraise", price: 2.5, category: "snacks", image: "/pocky.jpeg" },
  { id: 2, name: "Chips Wasabi", price: 3.0, category: "snacks", image: "chips.jpeg" },
  { id: 3, name: "Ramune Soda", price: 2.0, category: "boissons", image: "ramune.webp" },
  { id: 4, name: "Fanta Grape", price: 2.2, category: "boissons", image: "fanta.jpeg" },
  { id: 5, name: "Bento Poulet", price: 8.5, category: "bentos", image: "poulet.jpeg" },
  { id: 6, name: "San Goku", price: 9.0, category: "goodies", image: "goku.jpeg" },
  { id: 7, name: "Bento boeuf", price: 9.0, category: "bentos", image: "boeuf.jpeg" },
  { id: 8, name: "Banh mi", price: 9.0, category: "bentos", image: "banh.jpeg" },
  { id: 9, name: "Fanta ", price: 9.0, category: "boissons", image: "fanta1.jpeg" },
  { id: 10, name: "Naruto", price: 9.0, category: "goodies", image: "naruto.jpeg" },

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
