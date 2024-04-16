

import './App.css'
import { Routes, Route } from "react-router-dom";
// import Loader  from './components/Loader'
import CreateAccount from './components/createAccount' 
import LandingPage from './components/landingPage'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App;
