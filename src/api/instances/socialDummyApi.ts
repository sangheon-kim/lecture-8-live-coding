import axios from "axios";
const BASE_URL = "https://dummyapi.io/data/v1";
const APP_ID = "65f8e3dfe9dddab3d871c774";

export const socialDummyInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    "app-id": APP_ID,
  },
});