import axios from "axios";

const BASE_URL = import.meta.env.VUE_APP_BASE_URL;

const apiClient = axios.create({
  baseURL: 'https://api.envaccord.dervac.com/api/',
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;