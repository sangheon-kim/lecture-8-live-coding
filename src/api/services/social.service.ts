export class SocialService {
  _appId: string = "";
  constructor() {
    this._appId = process.env.NEXT_PUBLIC_APP_ID || "";
  }
}
