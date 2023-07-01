function Navigation() {
  return (
    <div className="bg-zinc-100 text-zinc-500 flex justify-between items-center p-6 mb-12 fixed w-full top-0 z-50">
      <h1 className="font-bold text-3xl">Notimerengue</h1>
      <ul className="flex justify-around">
        <li
          className="
        mr-6 
        font-bold
        text-md 
        text-zinc-500
        hover:scale-105
        hover:text-yellow-500
        transition-all 
        duration-300"
        >
          <a href="/noticias">
            Últimas Noticias
          </a>
        </li>
        <li
          className="
          mr-6 
          font-bold
          text-md 
          text-zinc-500
          hover:scale-105
          hover:text-yellow-500
          transition-all 
          duration-300"
        >
          <a href="https://github.com/arev-dev">Creador</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
