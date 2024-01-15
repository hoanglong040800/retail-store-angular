import { Component } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  public disabledConfirm: boolean = false;

  public async onSubmit(): Promise<void> {}
}
