import { GetCurrentWeatherRequest } from "@/@types/weather.api";
import axios, { AxiosInstance } from "axios";

export class WeatherService {
  constructor(private _ajax: AxiosInstance = axios) {}

  /**
   * @method GET
   * @summary 날씨 정보 조회
   * @description 날씨 정보를 조회합니다.
   * @memberof WeatherService
   */
  async getWeather(req: GetCurrentWeatherRequest) {
    const { data } = await this._ajax.get("/weather", {
      params: {
        appid: "c33a21799543cf7c08f96007d18f8add",
        ...req.params,
      },
    });

    return data;
  }
}
