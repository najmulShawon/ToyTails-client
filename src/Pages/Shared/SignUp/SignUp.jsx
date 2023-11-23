import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Register");

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photo, email, password);

    if (password != "" && password.length < 6) {
      setError("Password must be 6 characters long");
      return;
    } else if (email == "") {
      setError("Email field cannot be empty");
      return;
    } else if (password == "") {
      setError("Password field cannot be empty");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        // console.log(createdUser)
        updateUserProfile(name, photo)
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => console.log(error));

        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero  mb-10">
      <div className="hero-content  w-full lg:w-1/2 flex flex-col lg:my-10">
        <div className="card w-full max-w-xl border shadow-lg rounded-lg">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold text-black">
              Sign Up
            </h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered bg-white focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered bg-white focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
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
                  className="btn bg-orange-600 border-0 text-white capitalize text-lg "
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <br />
              <p className="text-red-600">{error}</p>
            </form>
            <p className="my-4 text-black">
              Already Have an Account?{" "}
              <Link className="text-orange-600 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
