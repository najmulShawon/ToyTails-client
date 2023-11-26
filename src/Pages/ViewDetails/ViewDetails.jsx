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
            <Ratingimport { useContext, useEffect, useState } from "react";
            import { FaRegStar, FaStar } from "react-icons/fa";
            import Rating from "react-rating";
            import { Link, useLoaderData, useParams } from "react-router-dom";
            import useTitle from "../../hooks/useTitle";
            import { AuthContext } from "../../Providers/AuthProvider";
            import axios from "axios";
            import Swal from "sweetalert2";
            import useCart from "../../hooks/useCart";
            
            const ViewDetails = () => {
              const [cart, refetch] = useCart();
              const allToys = useLoaderData();
              useTitle("Home/ViewDetails");
              const { user } = useContext(AuthContext);
            
              // console.log(allToys);
              const { id } = useParams();
            
              const [data, setData] = useState([]);
            
              useEffect(() => {
                if (allToys) {
                  let matchToyDetails = allToys.find((toy) => toy.id == id);
                  // console.log(matchToyDetails);
                  setData(matchToyDetails);
                }
              }, [allToys, id]);
            
              const handleAddToCart = () => {
                const toyInfo = {
                  id: data.id,
                  picture: data.picture,
                  toyName: data.toyName,
                  price: data.price,
                  email: user.email,
                };
                console.log(toyInfo);
                axios.post("http://localhost:5000/mycart", toyInfo).then((res) => {
                  // console.log(res.data);
                  if (res.data.insertedId) {
                    Swal.fire({
                      position: "top-center",
                      icon: "success",
                      title: "Product added to Cart",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    refetch();
                  }
                });
              };
            
              return (
                <div className="flex justify-center my-10 p-2 lg:p-0">
                  <div className="card md:card-side  rounded-lg shadow-lg border">
                    <figure className="">
                      <img className="w-72 h-80" src={data.picture} alt="Album" />
                    </figure>
                    <div className="card-body md:w-1/2">
                      <h2 className="card-title text-black">{data.toyName}</h2>
                      <p className="mb-0 text-black">{data.description}</p>
            
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
                      <p className="mb-0 text-black">
                        Price: <span className="font-semibold">${data.price}</span>
                      </p>
                      <div className="card-actions justify-start mt-6">
                        <Link
                          onClick={handleAddToCart}
                          className="btn  border-none bg-red-600 text-white capitalize"
                        >
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            };
            
            export default ViewDetails;
            
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
