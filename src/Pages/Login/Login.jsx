import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const [error, setError] = useState("");

  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  useTitle("Login");

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log(error)
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero  mb-10">
      <div className="hero-content w-full  lg:w-1/2 flex flex-col my-10">
        <div className="card w-full max-w-xl shadow-xl border">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold text-black">
              Please Login
            </h1>
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black ">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered bg-white focus:outline-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered bg-white focus:outline-none"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-orange-600 border-0 text-white capitalize text-lg"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="text-red-600">{error}</p>
            </form>
            <p className="my-4 text-black">
              New to ToyTails{" "}
              <Link className="text-orange-600 font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider text-black">OR</div>
              <div
                onClick={handleGoogleSignIn}
                className="flex capitalize items-center font-bold btn btn-outline text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                <FaGoogle className="mr-2"></FaGoogle> Login with Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
