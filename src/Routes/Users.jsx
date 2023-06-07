import React, { useState, useRef } from "react";
import Loading from "../components/Loading";
import UsersContainer from "../components/UsersContainer";
import '../screen.css'

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  const user = useRef("");
  let EndPoint = "https://api.github.com/users";

  async function FindUser() {
    setLoading(true);
    if (user.current.value !== "") {
      setUsers("");
      const res = await fetch(EndPoint + "/" + user.current.value);
      const data = await res.json();
      setUsers(() => [data]);
      console.log(users);
      user.current.value = "";
    }
    setLoading(null);
  }

  return (
    <div>
      <div className="flex justify-center my-6 text-4xl font-semibold sc">
        Let's Explore World of GitHub <span className=" text-sm ml-2 p-0 text-green-600 border-green-600 font-bold rounded-lg rounded-r-lg set"> Active </span>
      </div>
      <div className="flex justify-center h-11  mt-[200px] items-center">
        <input
          placeholder="Let's Explore username"
          ref={user}
          onKeyUp={(e) => e.key === "Enter" && FindUser()}
          type="text"
          className="h-full md:w-1/3 outline-none text-gray-800 px-2 
          font-semibold text-lg w-2/3 rounded-l-lg "
        />
        <button
          onClick={FindUser}
          className="bg-teal-500 font-semibold  px-4 h-full font-[Poppins] rounded-r-lg"
        >
          Search
        </button>
      </div>
      <div>{loading ? <Loading /> : <UsersContainer users={users} />}</div>
    </div>
  );
};

export default Users;
