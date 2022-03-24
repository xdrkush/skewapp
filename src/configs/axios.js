import axios from "axios";
console.log('ENV', process.env)
export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVEUR,
  headers: { "X-Custom-Header": "Skew application"},
  timeout: 2000,
});

export const apiSiret = axios.create({
  baseURL: "https://entreprise.data.gouv.fr/api/sirene/v3/etablissements/",
  headers: { "X-Custom-Header": "Skew application" },
  timeout: 1000,
});



