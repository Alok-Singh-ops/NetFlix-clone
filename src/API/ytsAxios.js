import axios from "axios";

const instance = axios.create({
  baseURL: "https://yts.mx/api/v2/list_movies.json",
});

export default instance;
