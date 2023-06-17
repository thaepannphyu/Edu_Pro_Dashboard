import React from "react";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";

const Profile = () => {
  return (
    <div className="lg:h-[900px] md:h-auto h-auto w-full flex justify-center">
      <div className="   w-[96%]   flex flex-wrap justify-center">
        {/* left */}
        <div className="w-[90%] lg:w-[35%] md:w-[80%] lg:h-screen h-[700px]  flex justify-center ">
          <ProfileLeft />
        </div>
        {/* right */}
        <div className="w-full lg:w-[65%] md:w-full py-5 ">
          <ProfileRight />
        </div>
      </div>
    </div>
  );
};

export default Profile;
