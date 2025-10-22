import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  { id: "all", name: "Tout" },
  { id: "snacks", name: "Snacks" },
  { id: "boissons", name: "Boissons" },
  { id: "food", name: "Food" },
  { id: "goodies", name: "Goodies" },
];

const DATA = [
  { id: 1, name: "Banh mi Konbini", price: 9.5, category: "food", image: "banhkonbini.jpeg" },
  { id: 2, name: "Banh mi Classic", price: 8.5, category: "food", image: "nature.jpeg" },
  { id: 3, name: "Banh mi Boeuf", price: 9.0, category: "food", image: "banh.jpeg" },
  { id: 4, name: "Banh mi Poulet", price: 9.0, category: "food", image: "banhpoulet.jpeg" },
  { id: 5, name: "Corn dog", price: 5.0, category: "food", image: "corn.jpeg" },
  { id: 6, name: "Nom Pao", price: 3.0, category: "food", image: "pao.jpeg" },
  { id: 7, name: "Soupe Miso maison", price: 3.0, category: "food", image: "miso.jpeg" },
  { id: 8, name: "Café glacé", price: 5.0, category: "boissons", image: "cafe.webp" },
  { id: 9, name: "Bubble glacé", price: 5.0, category: "boissons", image: "bubble.jpeg" },
  { id: 10, name: "Kit Kat", price: 2.5, category: "snacks", image: "kitkat.jpeg" },
  { id: 11, name: "Pocky Fraise", price: 2.5, category: "snacks", image: "pocky.jpeg" },
  { id: 12, name: "Chips Wasabi", price: 3.0, category: "snacks", image: "chips.jpeg" },
  { id: 13, name: "Ramune Soda", price: 2.0, category: "boissons", image: "ramune.webp" },
  { id: 14, name: "Fanta Grape", price: 2.2, category: "boissons", image: "fanta.jpeg" },
  { id: 15, name: "San Goku", price: 14.0, category: "goodies", image: "goku.jpeg" },
  { id: 16, name: "Naruto", price: 14.0, category: "goodies", image: "naruto.jpeg" },
  { id: 17, name: "Oreo", price: 3.0, category: "snacks", image: "oreo.jpeg" },
  { id: 18, name: "Cup Noodle", price: 3.0, category: "food", image: "cuo.jpeg" },
  { id: 19, name: "Peluche Pokemon", price: 13.0, category: "goodies", image: "pokemon.jpeg" },
  { id: 20, name: "Figurine One piece", price: 8.0, category: "goodies", image: "one.jpeg" },
];

function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  const products = useMemo(() => {
    let filtered = DATA;
    if (activeCategory !== "all") filtered = filtered.filter(p => p.category === activeCategory);
    if (searchTerm.trim())
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return filtered;
  }, [activeCategory, searchTerm]);

  const visibleProducts = products.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, products.length));
  };
  
  const handleSeeLess = () => {
    setVisibleCount(3);
  };
  

  const handleCategoryChange = id => {
    setActiveCategory(id);
    setVisibleCount(3);
  };

  return (
    <section className="products" aria-labelledby="products-title">
      <h2 id="products-title" className="products__title">Catégories de produits</h2>

      <div className="products__search">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="products__input"
        />
      </div>

      <div className="products__categories" role="tablist" aria-label="Catégories">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeCategory === cat.id}
            className={`products__category ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => handleCategoryChange(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <motion.div layout className="products__grid">
        <AnimatePresence>
          {visibleProducts.map(p => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="product__card"
            >
              <img src={p.image} alt={p.name} className="product__image" loading="lazy" />
              <div className="product__content">
                <h3 className="product__name">{p.name}</h3>
                <p className="product__price">{p.price.toFixed(2)} €</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {products.length > 3 && (
        <div className="products__actions">
          {visibleCount < products.length && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSeeMore}
              className="products__see-more"
            >
              Voir plus
            </motion.button>
          )}
          {visibleCount > 3 && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSeeLess}
              className="products__see-less"
            >
              Voir moins
            </motion.button>
          )}
        </div>
      )}
    </section>
  );
}

export default Products;
