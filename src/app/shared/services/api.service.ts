/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { API_URL } from 'shared/constant';
import { ApiResponse, HttpOptions } from 'shared/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private async request(
    method: string,
    route: string,
    body?: any,
    options?: HttpOptions,
  ): Promise<any> {
    try {
      const observe = this.http.request(method, `${API_URL}${route}`, {
        body,
        ...options,
      });

      const res = await lastValueFrom<ApiResponse>(
        observe as Observable<ApiResponse>,
      );

      return res?.data;
    } catch (err) {
      console.error(err);
    }
  }

  async get(route: string, options?: HttpOptions): Promise<any> {
    return await this.request('GET', route, undefined, options);
  }

  async post(route: string, body: any, options?: HttpOptions): Promise<any> {
    return await this.request('POST', route, body, options);
  }

  async put(route: string, body: any, options?: HttpOptions): Promise<any> {
    return await this.request('PUT', route, body, options);
  }

  async delete(route: string, options?: HttpOptions): Promise<any> {
    return await this.request('DELETE', route, undefined, options);
  }
}
