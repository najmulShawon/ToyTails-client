import img1 from "../../../assets/toy/teddy-bear/img1.jpg";
import img2 from "../../../assets/toy/horse/img1.jpg";
import img3 from "../../../assets/toy/cow/img1.avif";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto mb-10 lg:mb-28">
      <div className="carousel carousel-center w-full lg:h-[600px]">
        <div className="carousel-item">
          <img
            className="w-64 h-64 lg:w-full lg:h-full"
            src={img1}
            alt="Teddy-Bear"
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-64 h-64 lg:w-full lg:h-full"
            src={img2}
            alt="Horse"
          />
        </div>
        <div className="carousel-item">
          <img className="w-64 h-64 lg:w-full lg:h-full" src={img3} alt="Cow" />
        </div>
        <div className="carousel-item">
          <img
            className="w-64 h-64 lg:w-full lg:h-full"
            src={img1}
            alt="Teddy-Bear"
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-64 h-64 lg:w-full lg:h-full"
            src={img2}
            alt="Horse"
          />
        </div>
        <div className="carousel-item">
          <img className="w-64 h-64 lg:w-full lg:h-full" src={img3} alt="Cow" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
