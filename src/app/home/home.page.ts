import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonDatetime, IonImg, IonList, IonItem, IonCheckbox, IonButton, IonItemDivider, IonLabel } from '@ionic/angular/standalone';
import type { EChartsOption } from 'echarts';
import { ChartModule } from '../chart/chart.module'
import { Tension } from '../services/tensione.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItemDivider, IonButton, IonCheckbox, IonItem, IonList, IonImg, IonDatetime, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonRow, IonCol, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, ChartModule, RouterModule, CommonModule],
})
export class HomePage implements OnInit{
  data: any;
  
  constructor(private apiService: Tension) {}

  ngOnInit(){
    this.loadData();
  }

  loadData() {
  this.apiService.getdata().subscribe(
    data => {
      console.log('Data:', data);
      // Handle the data here
    },
    error => {
      console.error('Error:', error);
      // Handle the error here
    }
  );
  }
  
}
