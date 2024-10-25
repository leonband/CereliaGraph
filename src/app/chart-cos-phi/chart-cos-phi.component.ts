import { SharedService } from './../shared.service';
/* eslint-disable @angular-eslint/component-selector */
// chart.component.ts
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart-cos-phi',
  templateUrl: './chart-cos-phi.component.html',
  styleUrls: ['./chart-cos-phi.component.scss'],
})
export class ChartCosPhiComponent  implements OnInit {
dataSource!: object;
  private dataSubscription!: Subscription;

  constructor(private sharedService: SharedService) {

  }

 ngOnInit() {
    this.dataSubscription = this.sharedService.getCosPhiObservable().subscribe(
      datacosphi => {
      this.configureChart(datacosphi);
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  configureChart(chartData: any) {
    const chartConfigs = {
      caption: "Fattore di Potenza ( φ )",
      subCaption: "",
      xAxisName: "Tempo",
      yAxisName: "φ Istantaneo",
      numberSuffix: "",
      exportEnabled: "1",
      theme: "fusion",
    };

   this.dataSource = {
      chart: chartConfigs,
      data: chartData,
    };
    
}
}