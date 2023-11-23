import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import "./Navbar.css";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // console.log('You are successfully LoggedOut');
      })
      .catch((error) => console.log(error));
  };

  const navItems1 = (
    <div className="flex flex-col lg:flex-row lg:items-center text-black">
      <ActiveLink className="ms-0 lg:ms-8 font-bold mt-6 lg:mt-0" to="/">
        Home
      </ActiveLink>

      <ActiveLink to="/login" className="ms-0 lg:ms-8 mt-6 lg:mt-0 font-bold">
        <button className="btn bg-[rgb(203,62,6)] mt-6 lg:mt-0 text-white border-0 px-6">
          Login
        </button>
      </ActiveLink>
    </div>
  );
  const navItems2 = (
    <div className="flex flex-col lg:flex-row lg:items-center text-black">
      <ActiveLink className="ms-0 lg:ms-8 font-bold mt-6 lg:mt-0" to="/">
        Home
      </ActiveLink>

      <div className="w-10 rounded-full ms-6 lg:me-2 lg:ms-8 mt-6 lg:mt-2 ">
        <div
          className="avatar tooltip tooltip-bottom "
          data-tip={user?.displayName}
        >
          <div
            className="w-12 rounded-full ring ring-[rgb(203,62,6)] ring-offset-[rgb(203,62,6)] ring-offset-1 lg:items-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img src={user?.photoURL} />
          </div>
        </div>
      </div>
      <Link
        onClick={handleLogOut}
        className="ms-0 lg:ms-8 mt-2 lg:mt-0 font-bold"
      >
        <button className="btn bg-[rgb(203,62,6)] border-0 px-6 text-white capitalize text-lg">
          Logout
        </button>
      </Link>
    </div>
  );

  return (
    <div className=" border-b-4   border-[rgb(203,62,6)] ">
      <div className="max-w-7xl mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn bg-transparent border-none hover:bg-transparent outline-none lg:hidden text-black "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2  bg-white shadow-lg x w-52 border-b-2 rounded-b-lg"
              >
                {user ? navItems2 : navItems1}
              </ul>
            </div>
            <Link
              to="/"
              className="flex items-center normal-case text-xl ms-2 lg:ms-0"
            >
              <img
                className="w-8"
                src={logo}
                data-aos="zoom-in"
                data-aos-duration="1000"
                alt=""
              />
              <h1 className="font-bold ms-2 text-[rgb(203,62,6)]">ToyTails</h1>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex lg:items-center">
            <ul className="menu menu-horizontal px-1">
              {user ? navItems2 : navItems1}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
