import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonDatetime, IonImg, IonList, IonItem, IonCheckbox, IonButton } from '@ionic/angular/standalone';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonCheckbox, IonItem, IonList, IonImg, IonDatetime, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonRow, IonCol, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  
  constructor() {}

  
}
