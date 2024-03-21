export type GetCurrentWeatherRequestParams = {
  /** 위도 */
  lat: number;
  /** 경도 */
  lon: number;
  /** APP API KEY */
  appid?: string;
  /** 응답 모드 (xml | html | 없으면 json) */
  mode?: "xml" | "html";
  /** 단위 (default: standard) */
  units?: "standard" | "metric" | "imperial";
  /** 언어 */
  lang?: string;
};

export type GetCurrentWeatherRequestPath = {};

export type GetCurrentWeatherRequest = {
  path?: GetCurrentWeatherRequestPath;
  params: GetCurrentWeatherRequestParams;
};
