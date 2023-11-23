import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ViewDetails = () => {
  const allToys = useLoaderData();
  useTitle("Home/ViewDetails");

  // console.log(allToys);
  const { id } = useParams();
  // console.log(typeof id);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (allToys) {
      let matchToyDetails = allToys.find((toy) => toy.id == id);
      // console.log(matchToyDetails);
      setData(matchToyDetails);
    }
  }, [allToys, id]);

  return (
    <div className="max-w-7xl mx-auto my-10 p-4 lg:p-0">
      <div className="card lg:card-side  shadow-lg border">
        <figure className="w-1/2">
          <img className="w-72 h-80" src={data.picture} alt="Album" />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title text-black">{data.toyName}</h2>
          <p className="mb-0 text-black">{data.description}</p>
          <p className="mb-0 text-black">Seller Name: {data.sellerName}</p>
          <p className="mb-0 text-black">Seller Email: {data.sellerEmail}</p>
          <p className="mb-0 text-black">
            Price: <span className="font-semibold">${data.price}</span>
          </p>
          <div className="flex items-center   rating">
            <Rating
              placeholderRating={data.rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
              readonly
            ></Rating>
            <span className="ms-2  font-semibold" style={{ fontSize: "14px" }}>
              {data.rating}
            </span>
          </div>
          <p className="my-0 text-black">Available: {data.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
