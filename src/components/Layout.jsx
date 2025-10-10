import React from 'react';
import brain from "../assets/login_brain.png"

const Layout = ({ children, img = brain  }) => {
  return (
    <div className={` flex min-h-screen w-screen bg-[#F7FCFF]`}>
      {/* Left side - common image area */}
      <div className="w-1/2 flex items-center justify-center rounded-tr-4xl rounded-br-4xl overflow-hidden sticky top-0 h-screen">
        <img
          src={img}
          alt="Left side image"
          className="w-[95%] h-[97%] object- rounded-tr-4xl rounded-br-4xl"
        />
      </div>

      {/* Right side - dynamic form area */}
      <div className="w-1/2  flex items-center justify-center p-8 pt-10 overflow-y-auto max-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
