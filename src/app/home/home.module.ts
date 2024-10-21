// tab1.module.ts
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";
import { ChartModule } from "../chartTensione/chart.module";
import { ChartCorrenteModule } from "../chart-corrente/chart-corrente.module";
import { ChartCosPhiModule } from "../chart-cos-phi/chart-cos-phi.module"
import { ChartkiloVoltAmpereModule } from "../chart-kilo-volt-ampere/chart-kilo-volt-ampere.module";
import { ChartKiloWattModule } from "../chart-kilo-watt/chart-kilo-watt.module";
import { ChartKiloVoltAmpereReactModule } from './../chart-kilo-volt-ampere-react/chart-kilo-volt-ampere-react.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ChartModule,
    ChartCorrenteModule,
    ChartCosPhiModule,
    ChartkiloVoltAmpereModule,
    ChartKiloWattModule,
    ChartKiloVoltAmpereReactModule,
    RouterModule.forChild([{ path: "", component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}