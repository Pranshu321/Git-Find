import React, { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import Events from "../components/Events";
import Loading from "../components/Loading";
import Repo from "../components/Repo";
import Tabs from "../components/Tabs";
import UsersContainer from "../components/UsersContainer";
const UserInfo = () => {
  const [user, setUser] = useState([]);
  const [type, setType] = useState("repos");
  const [users, setUsers] = useState([]);
  const [loadind, setLoaing] = useState(null);
  let EndPoint = "https://api.github.com/users";
  const { pathname } = useLocation();
  async function GetUserInfo() {
    const res = await fetch(EndPoint + pathname);
    const data = await res.json();
    setUser(() => [data]);
  }
  async function GetUrls() {
    setUsers([]);
    setLoaing(true);
    const res = await fetch(EndPoint + pathname + `/${type}`);
    const data = await res.json();
    setUsers(data);
    setLoaing(null);
  }

  useEffect(() => {
    GetUserInfo();
    GetUrls();
    console.log(users);
  }, [pathname, type]);

  return (
    <div className="py-5">
      {user &&
        user?.map((uinfo, i) => (
          <div
            key={i}
            className="flex justify-center md:flex-row
             md:px-0 px-4 flex-col gap-10"
          >
            <img
              src={uinfo.avatar_url}
              className="w-[350px] rounded-full border-4 border-teal-400 md:mx-0 mx-auto"
            />
            <div className="text-lg leading-10 px-3">
              <h1 className="text-3xl pb-4">{uinfo.name}</h1>
              <h1>
                <span className="text-teal-400">Login_name</span> : {uinfo.login}
              </h1>
              <h1>
                <span className="text-teal-400">followers : </span>
                {uinfo.followers}
              </h1>
              <h1>
                <span className="text-teal-400">following : </span>
                {uinfo.following}
              </h1>
              <h1>
                <span className="text-teal-400">public_repositories : </span>
                {uinfo.public_repos}
              </h1>
              <h1>
                <span className="text-teal-400">Join : </span>
                {new Date(uinfo.created_at).toLocaleDateString()}
              </h1>
              <a
                href={uinfo.html_url}
                target="_blank"
                className="text-gray-200 
                  font-semibold rounded cursor-pointer  px-4 py-1 bg-teal-600 my-3 tracking-wide"
              >
                Visit
              </a>
              <a
                href="/"
                className="text-gray-200 
                  font-semibold rounded cursor-pointer ml-4 px-4 py-1 bg-teal-600 my-3 tracking-wide"
              >
                Back
              </a>

            </div>
          </div>
        ))}
      <div className="flex border-b pb-4 gap-6 mt-[10%] mb-6 justify-center md:text-xl ">
        <Tabs type={type} setType={setType} />
      </div>
      {loadind && <Loading />}
      {type === "repos" && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto">
          {users && <Repo users={users} />}
        </div>
      )}
      {type === "received_events" && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto ">
          {users && <Events data={users} />}
        </div>
      )}
      {type === "followers" && <UsersContainer users={users} />}
    </div>
  );
};

export default UserInfo;
