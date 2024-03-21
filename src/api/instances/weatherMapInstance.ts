// api-key: c33a21799543cf7c08f96007d18f8add

import axios from "axios";
import qs from "qs";

export const weatherMapInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  timeout: 5000,
  paramsSerializer: (params) => {
    return qs.stringify(params, {});
  },
  withCredentials: true,
});
