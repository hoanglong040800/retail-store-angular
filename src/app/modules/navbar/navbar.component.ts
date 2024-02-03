import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AuthModule } from 'modules/auth/auth.module';
import { CookieService } from 'ngx-cookie-service';
import { ActionModalComponent } from 'shared/components';
import { SharedComponentModule } from 'shared/components/shared-component.module';
import { COOKIE_AUTH_KEY } from 'shared/constant';

type AuthFormType = 'register' | 'login';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, SharedComponentModule, AuthModule],
})
export class NavbarComponent {
  @ViewChild('registerFormModal') registerFormModal!: ActionModalComponent;
  @ViewChild('loginFormModal') loginFormModal!: ActionModalComponent;

  authFormType: AuthFormType = 'register';
  isLoggedIn: boolean = false;

  constructor(private cookieSrv: CookieService) {
    this.isLoggedIn = !!cookieSrv.get('accessToken');
  }

  handleClickLogout() {
    this.removeAuthCookies();
    this.isLoggedIn = false;
  }

  removeAuthCookies() {
    for (const authKey in COOKIE_AUTH_KEY) {
      this.cookieSrv.delete(authKey);
    }
  }

  onOpenAuthModal(type: AuthFormType) {
    this.authFormType = type;

    switch (type) {
      case 'register':
        return this.registerFormModal.modal.present();
      case 'login':
        return this.loginFormModal.modal.present();
    }
  }

  renderAuthFormTitle() {
    switch (this.authFormType) {
      case 'login':
        return 'Login';
      case 'register':
        return 'Register';
      default:
        return '';
    }
  }
}
