import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TemplatesModule } from 'shared/templates/templates.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: [],
  standalone: true,
  imports: [IonicModule, TemplatesModule],
})
export class HomePage {}
