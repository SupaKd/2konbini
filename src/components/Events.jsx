// src/components/Events.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Events() {
  const events = [
    {
      id: 1,
      image: "/ben.webp",
      title: "Atelier Bento",
      desc: "Participez à un atelier unique pour apprendre à préparer votre propre bento japonais.",
    },
    {
      id: 2,
      image: "/ramune.webp",
      title: "Dégustation de Ramune",
      desc: "Découvrez toutes les saveurs de la célèbre limonade japonaise Ramune.",
    },
    {
      id: 3,
      image: "/culture.webp",
      title: "Soirée Culture Manga",
      desc: "Une soirée spéciale autour des mangas, avec quizz et projections.",
    },
  ];

  return (
    <section className="events">
      <div className="events__container">
        {/* Slider gauche */}
        <div className="events__slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
          >
            {events.map((ev) => (
              <SwiperSlide key={ev.id}>
                <div className="events__slide">
                  <img src={ev.image} alt={ev.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Texte droite */}
        <div className="events__content">
          <h2>Nos Événements</h2>
          <p>
            Venez vivre des expériences uniques dans notre konbini. Au-delà d’un
            simple lieu de vente, nous souhaitons créer un véritable espace de
            rencontre et de partage autour de la culture japonaise. Nous
            organisons régulièrement des ateliers participatifs, où vous pouvez
            apprendre à préparer des bentos, découvrir l’art du thé ou encore
            vous initier à la calligraphie japonaise. Nos séances de dégustation
            vous permettent de goûter à une sélection exclusive de snacks,
            boissons et spécialités venues directement du Japon, avec des
            explications sur leur origine et leur histoire. Pour aller plus
            loin, nous proposons aussi des soirées culturelles : projections de
            films, découvertes musicales, discussions autour des traditions et
            tendances modernes du Japon. Chaque événement est pensé pour
            rassembler notre communauté et offrir un moment convivial qui allie
            gastronomie, culture et découverte. Rejoignez-nous et plongez dans
            une expérience immersive où chaque visite devient un voyage au cœur
            du Japon.
          </p>
          <button className="events__btn">Voir le programme</button>
        </div>
      </div>
    </section>
  );
}

export default Events;
