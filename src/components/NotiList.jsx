import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNoticias } from "../api/noticias.api";
import NotiCard from "./NotiCard";

function NotiList() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    async function load() {
      const noticiaData = await getNoticias();
      setNoticias(noticiaData.data);
    }
    load();
  }, []);

  return (
    <div className="mt-28">
      <h1 className="font-bold text-center text-5xl text-zinc-800 pb-12">
        Últimas Noticias
      </h1>

      <Link className="flex justify-end" to="/noticias/create">
        <button className="mb-4 p-3 rounded-lg font-bold text-white bg-amber-500 hover:bg-amber-600 hover:scale-105 transition-all duration-300">
          Crear Noticia
        </button>
      </Link>

      <div
        className="
      mx-auto
      grid grid-cols-3 gap-1
      mb-12
    "
      >
        {noticias?.map((noti) => (
          <div key={noti.id}>
            <NotiCard noticia={noti} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotiList;
