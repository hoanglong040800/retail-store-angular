import { Component, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: [],
})
export class ActionModalComponent {
  @Input() title: string = '';
  @Input() disabledConfirmButton: boolean = false;

  @Input() onConfirm: () => void = () => null;

  @ViewChild(IonModal) modal!: IonModal;

  onCancel() {
    this.modal.dismiss();
  }

  handleConfirm() {
    this.onConfirm();
    // TODO uncomment
    // this.modal.dismiss();
  }
}
