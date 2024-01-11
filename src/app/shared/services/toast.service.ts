import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TOAST_CSS_CLASS_BY_TYPE } from 'shared/constant';
import { ToastType } from 'shared/types';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastCtrl: ToastController) {}

  async present(message: string, type: ToastType) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'bottom',
      cssClass: TOAST_CSS_CLASS_BY_TYPE[type],
    });

    await toast.present();
  }

  async dismiss(toast: HTMLIonToastElement) {
    toast.dismiss();
  }
}
