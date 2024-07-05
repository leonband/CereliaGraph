// chart.module.ts
import { NgModule } from "@angular/core";
// Import angular-fusioncharts
import { FusionChartsModule } from "angular-fusioncharts";
// Import FusionCharts library
import * as FusionCharts from "fusioncharts";

// Load FusionCharts Individual Charts
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { ChartKiloWattComponent } from "./chart-kilo-watt.component";
import { HttpClient } from "@angular/common/http";

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [ChartKiloWattComponent],
  imports: [
    FusionChartsModule, // Include in imports
    
  ],
  exports: [ChartKiloWattComponent]
})
export class ChartKiloWattModule {}