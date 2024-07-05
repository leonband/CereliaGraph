import { SharedService } from './../shared.service';
/* eslint-disable @angular-eslint/component-selector */
// chart.component.ts
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-chart-kilo-watt",
  templateUrl: "./chart-kilo-watt.component.html",
  styleUrls: ["./chart-kilo-watt.component.scss"]
})


export class ChartKiloWattComponent implements OnInit {

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

  configureChart(chartData: any) {
    const chartConfigs = {
      caption: "Potenza Attiva ( kW )",
      subCaption: "",
      xAxisName: "Tempo",
      yAxisName: "KiloWatt Istantanei",
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

