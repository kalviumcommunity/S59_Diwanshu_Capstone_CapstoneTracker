import logo from "../assets/logo.png"
import landingImage from "../assets/landing_page_Image.png" 

function LandingPage (){
    return (
      <div className="w-screen h-screen flex flex-row">
        <div className="w-1/2 h-screen bg-white">
          <img src={logo} alt="logo" className="h-99 w-99 md:w-36 mb-12" />

          <div className=" mx-24 mt-24 leading-8">
            <strong className="text-transform: uppercase text-7xl text-purple-400">
              Track your
            </strong>
            <br />
            <strong className="text-transform: uppercase text-7xl text-purple-400">
              Capstone
            </strong>
            <br />
            <strong className="text-transform: uppercase text-7xl text-purple-400">
              here!
            </strong>
          </div>
          <p className="text-4xl text-indigo-300 mx-24 mt-4">
            {" "}
            Plan , Discuss, Execute
          </p>
          <button className="w-48 text-2xl mx-24 mt-8 bg-indigo-800 text-white rounded-xl border-red-400">
            Get Started
          </button>
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

export default LandingPage;