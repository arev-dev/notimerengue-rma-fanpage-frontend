function DropZone() {
  return (
    <div class="border-4 border-gray-300 border-dashed rounded-lg bg-gray-100 dark:hover:bg-bray-800 dark:bg-zinc-500 hover:bg-gray-100 dark:border-zinc-600 dark:hover:border-gray-500 dark:hover:bg-zinc-600  relative">
      <input
        type="file"
        multiple
        class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
      />

      <div class="text-center p-8 absolute top-0 right-0 left-0 m-auto">
        <div className="flex justify-center">
          <svg
            aria-hidden="true"
            class="w-10 h-10 mb-3 text-gray-400 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
        </div>

        <h4 className="font-bold text-lg text-gray-200">Arrastra las imágenes para subirlas</h4>
        <p className="text-sm text-gray-200">ó</p>
        <p class="text-md text-gray-200">Selecciona las imágenes</p>
      </div>
    </div>
  );
}

export default DropZone;
