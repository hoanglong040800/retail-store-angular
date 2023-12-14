import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() openRegisterModal = new EventEmitter();

  onClickRegister() {
    this.openRegisterModal.emit();
  }
}
