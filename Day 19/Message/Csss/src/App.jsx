import React from "react";
import Home from "./components/Home";
import Text from "./components/Text";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text" element={<Text />} />
      </Routes>
    </div>
  );
};

export default App;
