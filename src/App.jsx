import React, { useState } from "react";
import Path from "./route/Path";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  

  

import { useSelector } from "react-redux";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const bgTexture = useSelector(state => state.themeSlice.bgTexture)
//   console.log(bgTexture.length);
  return (


    <>
    {bgTexture.length < 25 ? (
      <div className="" style={{
        backgroundImage: bgTexture ? `url(${bgTexture})` : `url("/src/assets/bg-img/1.png")`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: bgTexture ? "background-image 0.5s ease-in-out" : "",
      }}>
        <Path />
    </div> 

    ): (
      <div className="" style={{
        backgroundImage: bgTexture ? `${bgTexture}` : `url("/src/assets/bg-img/1.png")`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: bgTexture ? "background-image 0.5s ease-in-out" : "",
      }}>
        <div className=" flex">
        <Sidebar isOpen={isSidebarOpen} />

        <Navbar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
         <Path /> 
      </div>


    </div>
    )}
    </>
    
  );
};

export default App;
