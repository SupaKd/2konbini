const images = [
  "/inte.png",
  "/inte1.png",
  "/inte2.png",
];

function ImageCarousel() {
  return (
    <div className="carousel">
      <div className="carousel__track">
        {images.map((src, i) => (
          <div className="carousel__item" key={i}>
            <img src={src} alt={`slide-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
