import { useState } from "react";
import "./newpost.css";

export default function RightSideBar({ user }) {
  // Trending topics mock
  const trendingMock = [
    "#ReactJS",
    "#JavaScript",
    "#Vite",
    "#Frontend",
    "#IA2025"
  ];

  // Mock de usuarios a seguir
  const usersMock = [
    "Elisa_Carstairs",
    "WilliamHerondale",
    "Cassandra_Clare",
    "Hari_Seldon",
    "Isaac_Asimov",
    "Gaal_Dornick"
  ];

  // Mock de noticias
  const newsMock = [
    { title: "React lanza nueva versión", url: "#" },
    { title: "JavaScript sigue dominando el mundo web", url: "#" },
    { title: "Aprende Next.js en 30 días", url: "#" },
    { title: "Tendencias en IA para 2025", url: "#" },
    { title: "Frontend moderno: React + Vite", url: "#" }
  ];

  // Elegir 3 usuarios aleatorios para sugerir
  const shuffledUsers = usersMock.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="right-sidebar">
      {/* Trending topics */}
      <div className="sidebar-section">
        <h3>Trending Topics</h3>
        <ul>
          {trendingMock.map((topic, index) => (
            <li key={index}>
              <a href="#">{topic}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Noticias */}
      <div className="sidebar-section">
        <h3>Noticias</h3>
        <ul>
          {newsMock.map((item, index) => (
            <li key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* A quién seguir */}
      <div className="sidebar-section">
        <h3>A quién seguir</h3>
        <ul>
          {shuffledUsers.map((username, index) => (
            <li key={index} className="follow-user">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`}
                alt={username}
                className="avatar"
              />
              <span>@{username}</span>
              <button>Seguir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
