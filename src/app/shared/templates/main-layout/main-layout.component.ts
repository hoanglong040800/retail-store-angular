import { Component, ViewChild } from '@angular/core';
import { ActionModalComponent } from 'shared/components/action-modal';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  @ViewChild(ActionModalComponent) registerModal!: ActionModalComponent;

  onOpenRegisterModal() {
    this.registerModal.modal.present();
  }
}
