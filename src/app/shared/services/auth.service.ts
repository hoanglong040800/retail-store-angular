import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { API_URL } from 'shared/constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_ROUTE = `${API_URL}/auth`;

  constructor(private http: HttpClient) {}

  // TODO define interface later
  // TODO create seperate apiService
  async register(input: object): Promise<object> {
    const observe = this.http.post(`${this.API_ROUTE}/register`, input);
    return await lastValueFrom(observe);
  }
}
