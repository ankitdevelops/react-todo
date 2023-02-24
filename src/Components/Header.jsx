import React from "react";

const Header = ({ remainingTask }) => {
  return (
    <div className="w-10/12 mx-auto prose">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Welcome back, Ankit
      </h1>
      <p
        className=" text-lg sm:text-2xl my-3 font-light opacity-75
      "
      >
        You'he got {remainingTask} tasks coming up in the next days
      </p>
    </div>
  );
};

export default Header;
