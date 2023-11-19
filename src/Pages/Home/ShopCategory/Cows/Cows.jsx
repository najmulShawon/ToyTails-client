import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Cows = ({ cow }) => {
  const { id, picture, toyName, price, rating } = cow;
  return (
    <div
      className=" card w-full border  shadow-lg rounded-lg"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
    >
      <figure>
        <img className="w-full h-52" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{toyName}</h2>
        <p className="font-bold text-black">${price}</p>
        <div className="flex items-center  rating">
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
            readonly
          ></Rating>
          <span className="ms-2 font-semibold" style={{ fontSize: "14px" }}>
            {rating}
          </span>
        </div>
        <div className="card-actions mt-8 ">
          <Link to={`/toy/${id}`}>
            <button className="btn bg-orange-600 border-0 text-white capitalize">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cows;
