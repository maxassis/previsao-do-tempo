import axios from "axios";

export const key = "70d83e9d";

const api = axios.create({
  baseURL: "https://api.hgbrasil.com",
});

export default api;
