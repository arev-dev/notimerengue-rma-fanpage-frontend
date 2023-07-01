import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotiCardStyles } from "./styles/NotiCard.style";

function NotiCard({ noticia }) {
  const navigate = useNavigate();

  return (
    <div
      className={NotiCardStyles.card}
      onClick={() => {
        navigate("/noticias/" + noticia.id);
      }}
    >
      <img className={NotiCardStyles.img} width="500" height="300" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt0f0195ef838ca158/60da7571f1ff900f4d3b6440/0ad0bc86b915de955fb0158a832a15bca23311e8.jpg" />
      <div className="p-2">
        <h1 className={NotiCardStyles.title}>{noticia.title}</h1>
        <p className={NotiCardStyles.desc}>{noticia.description}</p>
        <div className="flex">
          <p className="mr-2 font-light text-sky-900">{noticia.date}</p>
          <p className="font-serif text-zinc-800">| {noticia.author}</p>
        </div>
      </div>
    </div>
  );
}
//https://picsum.photos/500/300
export default NotiCard;
