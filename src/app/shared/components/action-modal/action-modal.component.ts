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
  @Input() onConfirm: () => Promise<void | boolean> | void = () =>
    Promise.resolve();

  @ViewChild(IonModal) modal!: IonModal;

  onCancel() {
    this.modal.dismiss();
  }

  async handleConfirm() {
    const shouldDismiss = await this.onConfirm();

    // only return false when you don't want to dismiss modal
    if (shouldDismiss === false) {
      return;
    }

    this.modal.dismiss();
  }
}
