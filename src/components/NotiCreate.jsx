import { useState } from "react";
import { useForm } from "react-hook-form";
import { postNoticia } from "../api/noticias.api";
import DropZone from "./utils/DropZone";
import { toast } from "react-hot-toast";

function NotiCreate() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    // Obtener la fecha actual
    var fechaActual = new Date();

    // Obtener el día, mes y año de la fecha actual
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    var anio = fechaActual.getFullYear();

    // Añadir ceros iniciales si es necesario
    if (dia < 10) {
      dia = "0" + dia;
    }
    if (mes < 10) {
      mes = "0" + mes;
    }

    // Formatear la fecha en el formato "dd-mm-yyyy"
    var fechaFormateada = mes + "-" + dia + "-" + anio;

    // Mostrar la fecha formateada

    data.date = fechaFormateada;
    await postNoticia(data);
    toast.success('Noticia Creada Correctamente.', {
        style: {
          border: '2px solid #f59e0b',
          padding: '20px',
          color: '#f59e0b',
          fontWeight:"bold"
        },
        iconTheme: {
          primary: '#f59e0b',
          secondary: '#fff',
        },
      });
  });

  return (
    <div className="mt-24">
      <h1 className="mb-4 text-center font-bold text-zinc-700 text-3xl">
        Crear Nueva Noticia
      </h1>
      <div className="max-w-2xl mx-auto mb-6 bg-zinc-300 p-12 rounded-lg">
        <form className="max-w-xl" onSubmit={onSubmit}>
          <input
            className="w-full mb-3 p-2 rounded-lg"
            {...register("title", { required: true })}
            placeholder="Título de la Noticia"
          />
          <textarea
            rows={6}
            className="w-full mb-3 p-2 rounded-lg"
            {...register("description", { required: true })}
            placeholder="Descripción de la Noticia"
          />
          <input
            className="w-full mb-3 p-2 rounded-lg"
            {...register("author", { required: true })}
            placeholder="Nombre del Autor"
          />

          <div class="border-4 border-gray-300 border-dashed rounded-lg bg-gray-100 dark:hover:bg-bray-800 dark:bg-zinc-500 hover:bg-gray-100 dark:border-zinc-600 dark:hover:border-gray-500 dark:hover:bg-zinc-600  relative">
            <input
              type="file"
              multiple
              className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
              {...register("img")}
            />

            <div class="text-center p-8 absolute top-0 right-0 left-0 m-auto">
              <div className="flex justify-center">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400 dark:text-gray-200"
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

              <h4 className="font-bold text-lg text-gray-200">
                Arrastra las imágenes para subirlas
              </h4>
              <p className="text-sm text-gray-200">ó</p>
              <p class="text-md text-gray-200">Selecciona las imágenes</p>
            </div>
          </div>

          <div className="flex justify-center">
            <input
              type="submit"
              value="Crear Noticia"
              className="cursor-pointer mt-5 bg-green-400 p-4 rounded-lg text-lg text-white font-bold w-64 hover:bg-green-500 hover:scale-105 transition-all duration-300"
            />
          </div>
        </form>
      </div>
      {/* <p>{data}</p> */}
    </div>
  );
}

export default NotiCreate;
