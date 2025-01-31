import React, { useState } from "react";
import Path from "./route/Path";
import "./App.css";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
// import Calender from "./components/Calender/calender.jsx";

const App = () => {
  const bgTexture = useSelector((state) => state.themeSlice.bgTexture);
  //   console.log(bgTexture.length);
  return (
    <>
      {bgTexture.length < 25 ? (
        <div
          className=" min-h-screen"
          style={{
            backgroundImage: bgTexture
              ? `url(${bgTexture})`
              : `url("https://themewagon.github.io/dashtreme/assets/images/bg-themes/1.png")`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transition: bgTexture ? "background-image 0.5s ease-in-out" : "",
          }}>
          <Path />
        </div>
      ) : (
        <div
          className=" min-h-screen"
          style={{
            backgroundImage: bgTexture
              ? `${bgTexture}`
              : `url("https://themewagon.github.io/dashtreme/assets/images/bg-themes/1.png")`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transition: bgTexture ? "background-image 0.5s ease-in-out" : "",
          }}>
          <Path />
        </div>
      )}
    </>
  );
};

export default App;
