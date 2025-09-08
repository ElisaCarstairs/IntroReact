import { useState, useEffect } from "react";
import LeftSideBar from "../Components/Home/LeftSideBar";
import Content from "../Components/Home/Content";
import RightSideBar from "../Components/Home/RightSideBar";

export default function Home() {
  const [user, setUser] = useState(null);

  // Cargar user desde localStorage al iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (username) => {
    const newUser = { username };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="main">
      <LeftSideBar user={user} login={login} logout={logout} />
      <Content user={user} />
      <RightSideBar />

    </div>
  );
}
