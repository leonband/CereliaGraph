import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonDatetime, IonImg, IonList, IonItem, IonCheckbox, IonButton, IonItemDivider, IonLabel, IonModal, IonDatetimeButton } from '@ionic/angular/standalone';
import type { EChartsOption } from 'echarts';
import { ChartModule } from '../chartTensione/chart.module'
import { Tension } from '../services/tensione.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItemDivider, IonButton, IonCheckbox, IonItem, IonList, IonImg, IonDatetime, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonRow, IonCol, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, ChartModule, RouterModule, IonModal, IonDatetimeButton, CommonModule],
})
export class HomePage implements OnInit{
[x: string]: any;
  data: any;
  
  constructor(private apiService: Tension) {}

  ngOnInit(){
    this.loadData();
  }

  loadData() {
  this.apiService.getdata().subscribe(
    data => {
      console.log('Data:', data);
      this.data = data;
      // Handle the data here
    },
    error => {
      console.error('Error:', error);
      // Handle the error here
    }
  );
  }

  packageEstimatedDated: any[] = [];
  async validateDates(){
    console.log("selected dates length:", this.packageEstimatedDated.length)
    
    if(this.packageEstimatedDated.length === 3){
      console.log("after remove extra date", this.packageEstimatedDated)
      this.packageEstimatedDated.splice(0,1)
      console.log("after removed", this.packageEstimatedDated)
    }
  }

   question = {
    options: ['A', 'B'],
  };

    checkedItems = [];

  /*onChange(item) {
    if (this.checkedItems.includes(item)) {
      this.checkedItems = this.checkedItems.filter((value: any) => value != item);
      console.log('ciao ciao');
    } else {
      this.checkedItems.push(item);
      console.log('Bau ciao');
    }
  }*/
  
}
