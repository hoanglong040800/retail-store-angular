import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AuthModule } from 'modules/auth/auth.module';
import { ActionModalComponent } from 'shared/components';
import { SharedComponentModule } from 'shared/components/shared-component.module';

type AuthFormType = 'register' | 'login' | 'reset password';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonicModule, SharedComponentModule, AuthModule],
})
export class NavbarComponent {
  @ViewChild(ActionModalComponent) authModal!: ActionModalComponent;

  authForm: AuthFormType = 'register';

  onClickRegister() {
    this.authModal.modal.present();
  }
}
