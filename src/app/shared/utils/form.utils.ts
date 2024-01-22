import { FormGroup } from '@angular/forms';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const markTouchedAllInputs = (formGroup: FormGroup<any>): void => {
  Object.keys(formGroup.controls).forEach((key) => {
    formGroup.get(key)?.markAsTouched();
  });
};
