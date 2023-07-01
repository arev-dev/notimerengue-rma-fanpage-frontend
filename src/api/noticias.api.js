import {URL_API} from "./api.js";
import axios from "axios";

export const getNoticias = (id=null) => id === null ?  axios.get(URL_API) :  axios.get(URL_API+id)
export const postNoticia = (noticia) => axios.post(URL_API,noticia)
export const deleteNoticia = (id) => axios.delete(URL_API+id)
export const updateNoticias = (id, noticia) => axios.put(URL_API+id+"/", noticia)
