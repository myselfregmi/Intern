import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Signin from "./components/Signin";
import License from "./components/License";
import Listatus from "./components/Listatus";
import Applicant from "./components/Applicant";
import Reference from "./components/Reference";
import Lino from "./components/Lino";
import Write from "./components/Write";
import Online from "./components/Online";

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
            <Route path="/license" element={<License />} />
            <Route path="/listatus" element={<Listatus />} />
            <Route path="/applicant" element={<Applicant />} />
            <Route path="/reference" element={<Reference />} />
            <Route path="/lino" element={<Lino />} />
            <Route path="/write" element={<Write />} />
            <Route path="/online" element={<Online />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
