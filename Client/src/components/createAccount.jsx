
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom" ;
import landingImage from "../assets/landing_page_Image.png";
import googleImage from "../assets/googleImage.png";
import { useNavigate } from "react-router-dom";


function CreateAccount() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/dashboard')
    
  };
 

  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-1/2 h-screen bg-white">
        <Link to="/">
          <img src={logo} alt="logo" className="h-99 w-99 md:w-36 mb-12" />
        </Link>
        <div className="flex place flex-col place-items-center">
          <h1 className="text-purple-400 text-4xl">Create an account </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <strong className="text-indigo-300 text-2xl">Email</strong> <br />
              <input
                type="text"
                className="h-8 w-96 rounded-xl border-indigo-700 border-2 border-solid text-center "
                placeholder="name@example.com"
                {...register("email", {
                  required: "please enter the mail",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
              />
              {errors.email && (
                <p className="text-red-600">Email is Required.</p>
              )}
            </div>
            <div>
              <strong className="text-indigo-300 text-2xl">password</strong>
              <br />
              <input
                type="password"
                className="h-8 w-96 rounded-xl border-indigo-700 border-2 border-solid text-center "
                placeholder="********"
                {...register("password", {
                  required: "please enter the password",
                  minLength: {
                    value: 8,
                    message: "The password should be at least 8 character long",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-600 ">{errors.password.message}</p>
              )}
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  {...register("checkboxName", {
                    required: "Please fill it.",
                    message: "Please fill it.",
                  })}
                />
                I agree to the{" "}
                <span className="underline text-blue-500">
                  Terms of Service{" "}
                </span>{" "}
                and
                <span className="underline text-blue-500">Privacy Policy.</span>
              </label>
              {errors.checkboxName && (
                <p className="text-red-600"> {errors.checkboxName.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="h-11 w-96 bg-purple-500 text-white rounded-xl border-indigo-700 border-2 border-solid text-center"
            >
              Sign up
            </button>
          </form>

          <div className="flex flex-row my-3 items-center">
            <div className="h-[1px] w-8 bg-gray-300"></div>
            <p className="text-transform: uppercase text-gray-300 m-3 text-sm">
              or Continue with
            </p>
            <div className="h-[1px] w-8 bg-gray-300"></div>
          </div>
          <div>
            <button
              type="submit"
              className="h-11 w-96   rounded-xl border-indigo-700 border-2 border-solid text-center flex place-items-center "
            >
              <div className="flex place-items-center mx-16">
                <img
                  src={googleImage}
                  alt="googleImage"
                  className="h-4 w-8 mx-3 "
                />
                Signup with Google
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-screen bg-purple-400 ">
        <div className="text-transform: uppercase text-xl text-white flex flex-row justify-around my-16">
          <Link to="/">
            <p> Home</p>
          </Link>
          <Link to={"/aboutus"}>
            <p>About us</p>
          </Link>

          <Link to={"/aboutus"}>
            <p>Contact us</p>
          </Link>
        </div>
        <div className="my-40">
          <img
            src={landingImage}
            alt="landingImage"
            className="max-w-lg max-h-96 mx-24 "
          />
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
 