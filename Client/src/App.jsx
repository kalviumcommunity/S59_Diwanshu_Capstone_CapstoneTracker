

import './App.css'
import { Routes, Route } from "react-router-dom";
// import Loader  from './components/Loader'
import CreateAccount from './components/createAccount' 
import LandingPage from './components/landingPage'
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import Dashboard from './components/dashboard';
import Progress from './components/progress' ;
import AssignmentForm from '../src/Pages/Asssignmentform'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/Assignment" element={<AssignmentForm/>}/>
        <Route path="/progress" element={<Progress/>} /> 

      </Routes>
    </>
  );
}

export default App;
