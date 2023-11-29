import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: [],
})
export class ActionModalComponent {
  @ViewChild(IonModal) modal!: IonModal;

  onCancel() {
    this.modal.dismiss();
  }

  onConfirm() {
    this.modal.dismiss();
  }
}
