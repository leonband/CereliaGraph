// chart.module.ts
import { NgModule } from "@angular/core";
// Import angular-fusioncharts
import { FusionChartsModule } from "angular-fusioncharts";
// Import FusionCharts library
import * as FusionCharts from "fusioncharts";

// Load FusionCharts Individual Charts
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { ChartKiloVoltAmpereReactComponent } from "./chart-kilo-volt-ampere-react.component";
import { HttpClient } from "@angular/common/http";

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [ChartKiloVoltAmpereReactComponent],
  imports: [
    FusionChartsModule, // Include in imports
    
  ],
  exports: [ChartKiloVoltAmpereReactComponent]
})
export class ChartKiloVoltAmpereReactModule {}