import logo from "../assets/logo.png" ;
import './loader.css';

function Loader(){
    return (
      <div className=" w-screen h-screen flex flex-col  place-items-center">
        <img src={logo} alt="logo" className="w-28 md:w-36 mb-12"></img>
        <div className="loader w-16" aria-label="Loading">
          
        </div>
      </div>
    );
    
}

export default Loader;