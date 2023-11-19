import img1 from "../../../assets/toy/teddy-bear/img1.jpg";
import "./Offer.css";

const Offer = () => {
  return (
    <div className="max-w-7xl mx-auto mb-10 p-4 lg:p-0">
      <div className="card lg:card-side  shadow-xl">
        <figure>
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
            className="w-full h-full"
            src={img1}
            alt="Album"
          />
        </figure>
        <div
          className="card-body space-y-4"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h3 className="text-black">Huge Discount</h3>
          <h1 className="card-title text-4xl text-[rgb(203,62,6)]">
            GET 10% OFF
          </h1>
          <input
            type="text"
            placeholder="Your Mail Here"
            className="input input-bordered w-full max-w-xs bg-white text-black focus:outline-none"
          />
          <button className="btn btn-active bg-[rgb(203,62,6)] border-0 submit-btn px-8 text-white">
            Submit
          </button>
          <p className="text-black">
            Enjoy a fantastic 10% discount on this engaging toy, combining fun
            and savings. Delight your children with its vibrant colors at a
            reduced price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
