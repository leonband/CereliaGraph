import { ChartCorrenteComponent } from './chart-corrente.component';
import { NgModule } from "@angular/core";
import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";

// Load FusionCharts Individual Charts
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { HttpClient } from "@angular/common/http";

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [ChartCorrenteComponent],
  imports: [
    FusionChartsModule, // Include in imports
    
  ],
  exports: [ChartCorrenteComponent]
})
export class ChartCorrenteModule {}