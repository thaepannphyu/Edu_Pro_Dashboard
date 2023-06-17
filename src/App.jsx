import React, { useState } from "react";
import Path from "./route/Path";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://themewagon.github.io/dashtreme/assets/images/bg-themes/1.png")`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" h-[700px]">
      <div className=" flex">
        <Sidebar isOpen={isSidebarOpen} />

        <Navbar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        {/* <Path /> */}
      </div>
    </div>
  );
};

export default App;
