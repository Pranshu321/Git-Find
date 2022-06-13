import React from "react";

const Tabs = ({ type, setType }) => {
  return (
    <>
      <button
        className={`${type === "repos" && "text-teal-400"}`}
        onClick={() => setType("repos")}
      >
        Repositories <span className="pl-4"> | </span>
      </button>
      <button
        className={`${type === "received_events" && "text-teal-400"}`}
        onClick={() => setType("received_events")}
      >
       Activities <span className="pl-4"> | </span>
      </button>
      <button
        className={`${type === "followers" && "text-teal-400"}`}
        onClick={() => setType("followers")}
      >
        Followers 
      </button>
    </>
  );
};

export default Tabs;
