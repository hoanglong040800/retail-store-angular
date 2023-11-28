import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'todo-action-modal',
  templateUrl: './todo-action-modal.component.html',
})
export class TodoActionModalComponent {
  @ViewChild(IonModal) modal!: IonModal

  onCancel() {
    this.modal.dismiss();
  }

  onConfirm() {
    this.modal.dismiss();
  }
}
