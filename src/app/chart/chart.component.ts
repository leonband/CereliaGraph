import { Tension } from './../services/tensione.service';
// chart.component.ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chart-container",
  templateUrl: "chart.component.html",
  styleUrls: ["chart.component.scss"]
})
export class ChartComponent implements OnInit {
  dataSource: object;
  constructor() {
    const chartData = new Promise(resolve, reject ) => {
      
    }
    const chartConfigs = {
      caption: "Tensione ",
      subCaption: "In V = Volt",
      xAxisName: "Tempo",
      yAxisName: "Volt Istantanei",
      numberSuffix: "",
      exportEnabled: "1",
      theme: "fusion"
    };
    this.dataSource = {
      chart: chartConfigs,
      data: chartData
    };
  }
  ngOnInit() {}
}

