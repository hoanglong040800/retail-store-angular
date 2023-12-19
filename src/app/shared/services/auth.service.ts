import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private ROUTE = '/auth';

  constructor(private api: ApiService) {}

  // TODO define interface later
  async register(input: object): Promise<object> {
    return await this.api.post(`${this.ROUTE}/register`, input);
  }
}
