import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import "./styles.css";
import Detailform from "./components/Auth/Detailform";
import Home from "./components/Homepage/Homepage";
import Hackathon from "./components/Hackathons/Hackathon";
import TechnicalEvents from "./components/TechnicalEvents/TechnicalEvents";
import NonTechnicalEvents from "./components/NonTechnicalEvents/NonTechnicalEvents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/detailform/:role" element={<Detailform/>}/>
         <Route path="/homepage" element={<Home/>}/>
         <Route path="/hackathons" element={<Hackathon/>}/>
         <Route path="/technical-events" element={<TechnicalEvents/>}/>
         <Route path="/non-technical-events" element={<NonTechnicalEvents/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
