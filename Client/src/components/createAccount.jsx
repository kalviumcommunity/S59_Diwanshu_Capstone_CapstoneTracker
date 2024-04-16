import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import landingImage from "../assets/landing_page_Image.png";
// import { Checkbox } from "@/components/ui/checkbox";


function CreateAccount() {

     const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit=(data)=>{
    console.log(data);
  }

  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-1/2 h-screen bg-white">
        <img src={logo} alt="logo" className="h-99 w-99 md:w-36 mb-12" />
        <div className="flex place flex-col place-items-center">
          <h1 className="text-purple-400 text-4xl">Create an Account </h1>
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
              {errors.email && <p>Email is Required.</p>}
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
                  minlength: {
                    value: 8,
                    message: "The password should be at least 8 character long",
                  },
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  {...register("checkboxName", {
                    required: "Please fill it.",
                  })}
                />
                I agree to the{" "}
                <span className="underline text-blue-500">
                  Terms of Service{" "}
                </span>{" "}
                and
                <span className="underline text-blue-500">Privacy Policy.</span>
              </label>
            </div>
            <button
              type="submit"
              className="h-11 w-96 bg-purple-500 text-white rounded-xl border-indigo-700 border-2 border-solid text-center"
            >
              Sign up
            </button>
          </form>
          <div className="flex flex-row my-3">
            <div className="h-0.5 bg-gray-300"></div>
            <p className="text-transform: uppercase  text-2xl">
              or Continue with
            </p>
            <div className="h-0.5 bg-gray-300"></div>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-screen bg-purple-400 ">
        <div className="text-transform: uppercase text-xl text-white flex flex-row justify-around my-16">
          <p> Home</p>
          <p>About us</p>
          <p> Contact us</p>
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
