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
  { id: 1, name: "Banh mi Konbini", price: 9.5, category: "bentos", image: "banhkonbini.jpeg" },
  { id: 2, name: "Banh mi Classic", price: 8.5, category: "bentos", image: "nature.jpeg" },
  { id: 3, name: "Banh mi Boeuf", price: 9.0, category: "bentos", image: "banh.jpeg" },
  { id: 4, name: "Banh mi Poulet", price: 9.0, category: "bentos", image: "banhpoulet.jpeg" },
  { id: 5, name: "Corn dog", price: 5.0, category: "bentos", image: "corn.jpeg" },
  { id: 6, name: "Nom Pao", price: 3.0, category: "bentos", image: "pao.jpeg" },
  { id: 7, name: "Soupe Miso maison", price: 3.0, category: "bentos", image: "miso.jpeg" },
  { id: 8, name: "Café glacé", price: 5.0, category: "boissons", image: "cafe.webp" },
  { id: 9, name: "Bubble glacé", price: 5.0, category: "boissons", image: "bubble.jpeg" },
  { id: 10, name: "Kit Kat", price: 2.5, category: "snacks", image: "/kitkat.jpeg" },
  { id: 11, name: "Pocky Fraise", price: 2.5, category: "snacks", image: "/pocky.jpeg" },
  { id: 12, name: "Chips Wasabi", price: 3.0, category: "snacks", image: "chips.jpeg" },
  { id: 13, name: "Ramune Soda", price: 2.0, category: "boissons", image: "ramune.webp" },
  { id: 14, name: "Fanta Grape", price: 2.2, category: "boissons", image: "fanta.jpeg" },
  { id: 15, name: "San Goku", price: 14.0, category: "goodies", image: "goku.jpeg" },
  { id: 16, name: "Naruto", price: 14.0, category: "goodies", image: "naruto.jpeg" },
  { id: 17, name: "Oreo", price: 3.0, category: "snacks", image: "oreo.jpeg" },
  { id: 18, name: "Cup Noodle", price: 3.0, category: "bentos", image: "cuo.jpeg" },



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
      <div>
        <button className="voir">Voir plus</button>
      </div>
    </section>
  );
}

export default Products;
