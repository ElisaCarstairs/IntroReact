// src/pages/Home.jsx
import Content from "../Components/Home/Content";
import LeftSideBar from "../Components/Home/LeftSideBar";
import RightSideBar from "../Components/Home/RightSideBar";

export default function Home({ user, logout }) {
  return (
    <div className="main">
      <LeftSideBar user={user} logout={logout} />
      <Content user={user} />
      <RightSideBar />
    </div>
  );
}
