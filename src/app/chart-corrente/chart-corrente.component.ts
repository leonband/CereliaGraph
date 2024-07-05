import { SharedService } from './../shared.service';
/* eslint-disable @angular-eslint/component-selector */
// chart.component.ts
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart-corrente',
  templateUrl: './chart-corrente.component.html',
  styleUrls: ['./chart-corrente.component.scss'],
})
export class ChartCorrenteComponent  implements OnInit {
  dataSource!: object;
  private dataSubscription!: Subscription;

  constructor(private sharedService: SharedService) {

  }

 ngOnInit() {
    this.dataSubscription = this.sharedService.getDataObservable().subscribe(
      data => {
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
      caption: "Corrente ( A )",
      subCaption: "",
      xAxisName: "Tempo",
      yAxisName: "Ampere Istantanei",
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

