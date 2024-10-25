import { SharedService } from './../shared.service';
/* eslint-disable @angular-eslint/component-selector */
// chart.component.ts
import { Component, OnInit } from '@angular/core';
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
    this.dataSubscription = this.sharedService.getAmpObservable().subscribe(
      dataamp => {
      this.configureChart(dataamp);
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  configureChart(chartData: any) {
    const chartConfigs = {
      caption: "Tensione ( V )",
      subCaption: "",
      xAxisName: "Tempo",
      yAxisName: "Volt Istantanei",
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

