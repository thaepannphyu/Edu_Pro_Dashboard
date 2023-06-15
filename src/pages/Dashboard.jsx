import React from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className=" h-screen flex flex-col items-center justify-center ">
      {/* <Sidebar /> */}
      <div className=" w-[600px] bgTransparent h-[400px] ">
        <h2 className="  title">Dashboard</h2>
        <h2 className=" subtitle">subtitle</h2>
      </div>
    </div>
  );
};

export default Dashboard;
