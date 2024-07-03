import { SharedService } from './../shared.service';
/* eslint-disable @angular-eslint/component-selector */
import { Tension } from '../services/tensione.service';
// chart.component.ts
import { Component, OnInit, inject, Input,  ViewChild, ElementRef } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonDatetime, IonImg, IonList, IonItem, IonCheckbox, IonButton, IonItemDivider, IonLabel, IonModal, IonDatetimeButton } from '@ionic/angular/standalone';
import type { EChartsOption } from 'echarts';
import { ChartModule } from '../chartTensione/chart.module'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FusionChartsModule } from 'angular-fusioncharts';
import { Subscription } from 'rxjs';

@Component({
  selector: "chart-container",
  templateUrl: "chart.component.html",
  styleUrls: ["chart.component.scss"]
})


export class ChartComponent implements OnInit {

  dataSource!: object;
  private dataSubscription!: Subscription;

  constructor(private sharedService: SharedService) {

  }

 ngOnInit() {
    this.dataSubscription = this.sharedService.getDataObservable().subscribe(data => {
      this.configureChart(data);
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
  
/*onChange(){
  this.configureChart(this.data);
}

   

 loadData() {
  this.apiService.getdata().subscribe(
    data => {
      console.log('Data:', data);
      this.configureChart(data);
      console.log(data)
      // Handle the data here
    },
    error => {
      console.error('Error:', error);
      // Handle the error here
    }
  );
  }*/

  configureChart(chartData: any) {
    const chartConfigs = {
      caption: "Tensione",
      subCaption: "In V = Volt",
      xAxisName: "Tempo",
      yAxisName: "Volt Istantanei",
      numberSuffix: "",
      exportEnabled: "1",
      theme: "fusion",
    };

   this.dataSource = {
      chart: chartConfigs,
      data: chartData, // Assuming chartData is in the format required by FusionCharts
    };
    
}
}

