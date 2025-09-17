// src/components/Events.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Events() {
  const events = [
    {
      id: 1,
      image: "/quiz.jpeg",
      title: "Atelier Bento",
      desc: "Participez à un atelier unique pour apprendre à préparer votre propre bento japonais.",
    },
    {
      id: 2,
      image: "/ramune2.jpeg",
      title: "Dégustation de Ramune",
      desc: "Découvrez toutes les saveurs de la célèbre limonade japonaise Ramune.",
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
            Participez à nos animations exclusives ! Venez tester vos
            connaissances avec nos jeux quiz, tentez votre chance lors de
            tirages au sort pour remporter de nombreux lots, et découvrez de
            nouvelles saveurs grâce à nos ateliers de dégustation. Un moment
            convivial à partager, où plaisir et surprises sont toujours au
            rendez-vous.
          </p>
          <button className="events__btn">Voir le programme</button>
        </div>
      </div>
    </section>
  );
}

export default Events;
