// tab1.module.ts
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";
import { ChartModule } from "../chartTensione/chart.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ChartModule,
    RouterModule.forChild([{ path: "", component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}