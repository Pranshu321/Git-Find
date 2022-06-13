import React from "react";

const Logo = () => {
  return (
    <div className="flex pb-2 justify-center items-center">
      <img
        src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
        className="w-24 rounded-full"
      />
      <h1 className="text-2xl px-2 first-letter:text-5xl">Git <span className="text-5xl" >F</span>ind</h1>
    </div>
  );
};

export default Logo;
