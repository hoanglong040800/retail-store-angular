export type ToastType = 'success' | 'error';
export type ToastClass = 'toast-success' | 'toast-error';
export type ToastClassByType = { [key in ToastType]: ToastClass };
