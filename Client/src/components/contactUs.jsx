import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import landingImage from "../assets/landing_page_Image.png";
import { Link } from "react-router-dom";

function ContactUs() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    };

  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-1/2 h-screen bg-white">
        <Link to="/">
          <img src={logo} alt="logo" className="h-99 w-99 md:w-36 mb-12" />
        </Link>
        <div>
          <p className=" mx-16 text-4xl text-purple-600">Contact us</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex flex-col mx-16">
              <strong className="text-indigo-300 text-2xl ">Email</strong>{" "}
              <input
                type="text"
                className="h-8 w-96 rounded-xl border-indigo-700
                  border-2 border-solid text-center "
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
            <br />
            <div className="w-full flex flex-col mx-16">
              <strong className="text-indigo-300 text-2xl">Full Name</strong>{" "}
              <input
                className="h-8 w-96 rounded-xl border-indigo-700 border-2 border-solid text-center"
                placeholder="Full Name"
                {...register("fullname", {
                  required: "Enter your full name",
                  maxlength: {
                    value: 30,
                    message: "You Cannot have this much long name",
                  },
                })}
              />
              {errors.fullname && (
                <p className="text-red-600">{errors.fullname.message}</p>
              )}
            </div>
            <br />

            <div className="mx-16">
              <strong className="text-indigo-300 text-2xl">Message</strong>
              <br />
              <input
                className="h-32 w-96 rounded-xl border-indigo-700 border-2 border-solid text-center"
                placeholder="Hi there!"
                {...register("message", {
                  required: "Please fill up your message.",
                  message: "Please fill up your message.",
                })}
              />
              {errors.message && (
                <p className="text-red-600">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className=" mx-16 my-16 h-11 w-96 bg-purple-700 text-white rounded-xl border-indigo-700 border-2 border-solid text-center"
            >
              Submit
            </button>
          </form>
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
          <Link to={"/contactus"}>
            <p> Contact us</p>
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

export default ContactUs;
