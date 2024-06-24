/* eslint-disable @angular-eslint/component-selector */
import { Tension } from './../services/tensione.service';
// chart.component.ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chart-container",
  templateUrl: "chart.component.html",
  styleUrls: ["chart.component.scss"]
})
export class ChartComponent implements OnInit {
  data: any = {};

  constructor(private apiService: Tension) {

  }
  
  dataSource!: object;
  ngOnInit(){
    this.loadData();
  }

  loadData() {
  this.apiService.getdata().subscribe(
    data => {
      console.log('Data:', data);
      this.configureChart(data);
      // Handle the data here
    },
    error => {
      console.error('Error:', error);
      // Handle the error here
    }
  );
  }

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

