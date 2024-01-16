import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
})
export class TextInputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() name!: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() formGroup!: FormGroup<any>;

  get f() {
    return this.formGroup.controls;
  }
}
