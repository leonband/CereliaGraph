import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ChartModule } from './chartTensione/chart.module'
import { MultiPicker } from 'ion-multi-picker';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, ChartModule ],
})
export class AppComponent {
  constructor() {}
}
