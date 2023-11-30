import { Component, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: [],
})
export class ActionModalComponent {
  @Input() title: string = '';

  @ViewChild(IonModal) modal!: IonModal;

  onCancel() {
    this.modal.dismiss();
  }

  onConfirm() {
    this.modal.dismiss();
  }
}
