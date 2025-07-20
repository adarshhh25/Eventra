import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import "./styles.css";
import Detailform from "./components/Auth/Detailform";
import Home from "./components/Homepage/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/Detailform/:role" element={<Detailform/>}/>
         <Route path="/homepage" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
