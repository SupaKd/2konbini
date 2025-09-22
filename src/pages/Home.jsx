import Hero from "../components/Hero";
import Products from "../components/Products";
import Presentation from "../components/Presentation";
import Events from "../components/Events";
import Equipe from "../components/Equipe";
import Testimonials from "../components/Testimonials";
import MarqueeNeon from "../components/MarqueeNeon";
import Galerie from "../components/Galerie";
import ImageCarousel from "../components/ImageCarousel";
import Eco from "../components/Eco";
function Home() {
    return (
      <main className="home">

        < Hero />
        < MarqueeNeon />
        < ImageCarousel />
        < Presentation />
        < Galerie />
        < Events />
        < Products />
        < Eco />
        < Equipe />
        < Testimonials />
      </main>
    );
  }
  
  export default Home;
  