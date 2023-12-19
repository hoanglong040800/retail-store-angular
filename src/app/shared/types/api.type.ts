import { HttpHeaders, HttpParams } from '@angular/common/http';

type HttpHeadersAlter = {
  [header: string]: string | string[];
};

type HttpParamsAlter = {
  [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>;
};

export type HttpOptions = {
  headers?: HttpHeaders | HttpHeadersAlter;
  params?: HttpParams | HttpParamsAlter;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse<T = any> = {
  data: T;
  message: string;
  status: number;
};
