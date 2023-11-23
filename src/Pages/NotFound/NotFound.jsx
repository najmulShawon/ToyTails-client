import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/error/404.webp";

const NotFound = () => {
  const error = useRouteError();
  // console.log(error);
  return (
    <div
      className="max-w-7xl
        notFoundPage text-center mx-auto space-y-4 flex flex-col  mt-8"
    >
      <div className="text-center">
        <img className="mx-auto" src={img} alt="" />
      </div>
      <div className="text-2xl">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="btn btn-active bg-[rgb(203,62,6)] border-0">
            Back To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
