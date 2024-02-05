import { ToastClassByType } from 'shared/types';

export const TOAST_CSS_CLASS_BY_TYPE: ToastClassByType = {
  success: 'toast-success',
  error: 'toast-error',
};

export enum COOKIE_KEY {
  accessToken = 'accessToken',
  refreshToken = 'refreshToken',
  user = 'user',
}

export enum COOKIE_AUTH_KEY {
  accessToken = COOKIE_KEY.accessToken,
  refreshToken = COOKIE_KEY.refreshToken,
  user = COOKIE_KEY.user,
}
