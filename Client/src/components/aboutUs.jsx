import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function AboutUs() {
  return (
    <div>
      <div className="w-screen  bg-white flex flex-row justify-between">
        <Link to="/">
          <img src={logo} alt="logo" className="h-99 w-99 md:w-36 mb-12" />
        </Link>
        <div className="w-1/2 text-transform: uppercase text-xl text-purple-400 flex flex-row justify-around mt-16">
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
      </div>
      <div>
        <p className="w-screen flex justify-center text-4xl text-transform: uppercase text-purple-600 ">
          {" "}
          About Capstone
        </p>
      </div>
      <div className="flex justify-around my-40">
        <div className="w-56 h-56 bg-gray-300 rounded-full"></div>
        <p className="w-1/2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          repellat temporibus exercitationem! Sed at fugit eum officiis iusto!
          Est quis aut pariatur blanditiis id officia consequatur. Maxime quos
          eius, mollitia ipsa adipisci vitae, veritatis dolores eos dolorem
          explicabo reiciendis ullam aperiam quod totam alias consequatur
          deleniti voluptate, ad maiores animi odit fuga quo! Vitae placeat
          fugit in velit vero delectus, molestias veritatis deserunt obcaecati
          expedita. Ex tempora dolore repellendus voluptatum tenetur quia.
          Suscipit, unde repudiandae iusto eum mollitia quaerat officiis.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
