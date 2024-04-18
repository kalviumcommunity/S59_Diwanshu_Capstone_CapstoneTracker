import logo from "../assets/logo.png"
import logout from "../assets/logout.png" ;
import verify from "../assets/verify.png" ;
import homeButton from "../assets/homeButton.png";
import upArrow from "../assets/upArrow.png" ;
import discussion from "../assets/feedback.png";

function Dashboard(){
    return (
      <div className="w-screen h-screen bg-gray-100 flex flex-row">
        <div className="h-screen w-2/12 bg-white">
          <div className="w-full h-40">
            <img src={logo} alt="logo" className="h-99 w-99 md:w-36 mb-12" />
          </div>
          <div className="w-11/12 h-12 bg-gray-100 flex  flex-row items-center">
            <img src={homeButton} alt="homeButton" className="h-6 w-5 m-8" />
            <p>Dashboard</p>
          </div>
          <div className="flex flex-row items-center h-12">
            <img src={upArrow} alt="upArrow" className="h-6 w-5 m-8" />
            <p>Upload</p>
          </div>
          <div className="w-11/12 h-12 bg-gray-100 flex flex-row items-center">
            <img src={verify} alt="verify" className="h-6 w-5 m-8" />
            <p>Progress</p>
          </div>
          <div className="flex flex-row items-center h-12">
            <img src={discussion} alt="discussion" className="h-6 w-5 m-8" />
            <p>Discussion</p>
          </div>
          <div className="w-11/12 h-12 bg-gray-100 flex flex-row items-center fixed bottom-1">
            <img src={logout} alt="logout" className="h-6 w-5 m-8" />
            <p>Logout</p>
          </div>
        </div>
        <div className="mx-12 my-12">
          <p className="text-purple-400 text-4xl"> Welcome back , Sujal </p>
        </div>
      </div>
    );
}

export default Dashboard ;