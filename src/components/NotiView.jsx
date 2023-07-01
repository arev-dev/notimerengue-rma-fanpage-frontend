import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNoticias } from "../api/noticias.api";

function NotiView() {
  const [noticia, setNoticias] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function load() {
      const noticiaData = await getNoticias(params.id);
      setNoticias(noticiaData.data);
    }
    load();
  }, []);

  return (
    <div>
      <div>
        <h1 className="mt-28 font-bold text-4xl text-center text-zinc-800">
          {noticia.title}
        </h1>
        <div className="flex flex-row m-2 pb-2">
          <h3 className="mr-2 font-bold text-zinc-800">Por {noticia.author}</h3>
          <h3 className="font-serif text-sky-800">| publicado {noticia.date}</h3>
        </div>
      </div>
      <div className="bg-slate-600/10 p-2 flex justify-center rounded-md max-w-96">
        <div className="flex justify-center w-auto h-96">
          <img
            className="rounded-lg"
            src="https://okdiario.com/diariomadridista/img/2023/06/22/madrid-esperara-a-mbappe-deportes-interior-655x368.jpg"
          />
        </div>
      </div>
      <div className="p-6 m-6 text-xl rounded-lg 
    {*]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          distinctio quaerat reprehenderit doloribus aut iusto adipisci labore
          aliquam ad aspernatur? Harum, in laudantium distinctio consectetur
          quibusdam minima dignissimos nesciunt! Et.
        </p>
      </div>
    </div>
  );
}

export default NotiView;
