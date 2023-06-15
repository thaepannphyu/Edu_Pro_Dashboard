import React from "react";
import Path from "./route/Path";
import "./App.css";

const App = () => {
  return (
    <div style={{
      backgroundImage : `url("https://themewagon.github.io/dashtreme/assets/images/bg-themes/1.png")`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }} className=" h-screen">
      <Path />
    </div>
  );
};

export default App;
