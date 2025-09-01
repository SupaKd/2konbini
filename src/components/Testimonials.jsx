// src/components/Testimonials.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const REVIEWS = [
  { id: 1, name: "Marie D.", rating: 5, text: "Bentos délicieux, accueil top." },
  { id: 2, name: "Karim L.", rating: 4, text: "Grand choix de snacks japonais." },
  { id: 3, name: "Sophie R.", rating: 5, text: "Lieu propre, service rapide." },
  { id: 4, name: "Hugo T.", rating: 4, text: "Ramune et onigiri au top." },
];

function Stars({ n = 5 }) {
  return (
    <div className="stars" aria-label={`${n} sur 5`}>
      {"★★★★★☆☆☆☆☆".slice(0, n)}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testi-title">
      <h2 id="testi-title">Ils nous recommandent</h2>

      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        slidesPerView={1}
        spaceBetween={16}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
        className="testimonials__swiper"
      >
        {REVIEWS.map((r) => (
          <SwiperSlide key={r.id}>
            <article className="testi__card">
              <Stars n={r.rating} />
              <p className="testi__text">“{r.text}”</p>
              <p className="testi__name">— {r.name}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export default  Testimonials;