import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { LoginRes } from 'shared/types';
import { COOKIE_AUTH_KEY } from 'shared/constant';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private ROUTE = '/auth';

  constructor(
    private api: ApiService,
    private cookieSrv: CookieService,
  ) {
    // TODO long.t init isLoggedIn here
  }

  // TODO define interface later
  async register(input: object): Promise<object> {
    return await this.api.post(`${this.ROUTE}/register`, input);
  }

  async loginApi(input: object): Promise<LoginRes> {
    return await this.api.post(`${this.ROUTE}/login`, input);
  }

  async login(loginData: {
    email: string;
    password: string;
  }): Promise<boolean> {
    if (!loginData) {
      return false;
    }

    const loginRes = await this.loginApi(loginData);
    this.handleAfterLogin(loginRes);

    return true;
  }

  handleAfterLogin(loginRes: LoginRes): void {
    this.cookieSrv.set(COOKIE_AUTH_KEY.accessToken, loginRes.accessToken);
    this.cookieSrv.set(COOKIE_AUTH_KEY.refreshToken, loginRes.refreshToken);
    this.cookieSrv.set(COOKIE_AUTH_KEY.user, JSON.stringify(loginRes.user));
  }
}
