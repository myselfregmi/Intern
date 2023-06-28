import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Signin from "./components/Signin";

const App = () => {
  return (
    <>
      <div className="h-screen w-full bg-black">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
