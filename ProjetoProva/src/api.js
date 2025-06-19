import axios from "axios";
import { TMDB_BEARER_TOKEN } from "@env";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${TMDB_BEARER_TOKEN}`,
    "Content-Type": "application/json",
  },
});
console.log("Bearer Token:", TMDB_BEARER_TOKEN);


export default api;
