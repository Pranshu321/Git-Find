import React from "react";
import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import UserInfo from "./Routes/UserInfo";
import Users from "./Routes/Users";

const App = () => {
  const bgurl = "https://images2.alphacoders.com/985/thumb-1920-985381.jpg";

  return (
    <div className="min-h-screen bg-[url('https://images2.alphacoders.com/985/thumb-1920-985381.jpg')] bg-cover py-3">
      <div className="container text-gray-200">
        <Logo />
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/:name" element={<UserInfo />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
