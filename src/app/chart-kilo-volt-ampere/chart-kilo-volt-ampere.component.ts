import { SharedService } from './../shared.service';
/* eslint-disable @angular-eslint/component-selector */
// chart.component.ts
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart-kilo-volt-ampere',
  templateUrl: './chart-kilo-volt-ampere.component.html',
  styleUrls: ['./chart-kilo-volt-ampere.component.scss'],
})
export class ChartKiloVoltAmpereComponent  implements OnInit {
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
      caption: "Potenza Apparete ( kVA )",
      subCaption: "",
      xAxisName: "Tempo",
      yAxisName: "KiloVoltAmpere Istantanei",
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