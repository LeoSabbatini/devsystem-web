import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "../pages/Sobre";
import Login from "../pages/Login"
import Navbar from "../components/Navbar";
export default function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Sobre" element={<Sobre/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
