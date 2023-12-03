import { SimpleChange } from '@angular/core';

export type SimpleChangeTyped<T> = Omit<
  SimpleChange,
  SimpleChange['previousValue'] | SimpleChange['currentValue']
> & {
  previousValue: T;
  currentValue: T;
  isFirstChange(): boolean;
};

export type SimpleChangesTyped<T> = {
  [K in keyof T]: SimpleChangeTyped<T[K]>;
};
