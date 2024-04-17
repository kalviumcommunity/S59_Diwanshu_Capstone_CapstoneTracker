

import './App.css'
import { Routes, Route } from "react-router-dom";
// import Loader  from './components/Loader'
import CreateAccount from './components/createAccount' 
import LandingPage from './components/landingPage'
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;
