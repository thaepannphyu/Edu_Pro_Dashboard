import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CreateCourse from "../pages/CreateCourse";
import Theme from "../components/Theme";

const Path = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/createCourse" element={<CreateCourse />} />
          <Route path="/theme" element={<Theme />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Path;
