import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import "./styles.css";
import Detailform from "./components/Auth/Detailform";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/Detailform/:role" element={<Detailform/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
