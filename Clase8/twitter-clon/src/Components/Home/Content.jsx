import { useState, useEffect } from "react";
import Timeline from "../Common/Timeline";
import NewPost from "./NewPost";

// Posts predefinidos
const previousPosts = [
  { id: 1, content: "Hola, Mundo", author: "Elisa_Carstairs" },
  { id: 2, content: "Excelente día", author: "WilliamHerondale" },
  { id: 3, content: "Trabajando ando", author: "Cassandra Clare" },
  { id: 4, content: "La ciencia ficción es la literatura del futuro.", author: "Hari_Seldon" },
  { id: 5, content: "El futuro siempre ha estado aquí, solo que no en todas partes.", author: "R_Daneel_Olivaw" },
  { id: 6, content: "La psicohistoria no predice al individuo, sino a las masas.", author: "Hari_Seldon" },
  { id: 7, content: "Y aun así, una sola persona puede cambiar el destino.", author: "Gaal_Dornick" },
  { id: 8, content: "Lo importante no es prever el futuro, sino hacerlo posible.", author: "Isaac_Asimov" },
  { id: 9, content: "Los seres humanos a menudo ven lo que esperan ver.", author: "Elijah_Baley" },
  { id: 10, content: "Detecto patrones en las emociones que ni siquiera ustedes comprenden.", author: "R_Giskard_Reventlov" },
];

export default function Content({ user }) {
  const [posts, setPost] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    const saved = savedPosts ? JSON.parse(savedPosts) : [];
    const allPosts = [
      ...previousPosts.filter(p => !saved.some(s => s.id === p.id)),
      ...saved
    ];
    return allPosts;
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="home-content">
      <NewPost posts={posts} setPost={setPost} user={user} />
      <Timeline posts={posts} />
    </div>
  );
}
