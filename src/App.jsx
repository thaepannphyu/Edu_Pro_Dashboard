import React from "react";
import Path from "./route/Path";
import "./App.css";
import backgroundImage from './assets/bg-img/2.png';

const App = () => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
      <Path />
    </div>
  );
};

export default App;
