import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import CreateCourse from "../pages/CreateCourse";
import Theme from "../components/Theme";
import Profile from "../components/Profile/Profile";
import Navbar from "../components/Navbar";
import Error from "../pages/Error";
import Calender from "../components/Calender/calender";

const Path = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/createCourse" element={<CreateCourse />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Theme />
      </BrowserRouter>
    </div>
  );
};

export default Path;
