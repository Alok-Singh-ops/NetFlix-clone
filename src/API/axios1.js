import axios from "axios";
// import datas from "../New folder/data";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

// const data = datas;

// console.log(data);

export default instance;
