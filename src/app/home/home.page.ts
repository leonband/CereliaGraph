import { SharedService } from './../shared.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonDatetime,
         IonImg, IonList, IonItem, IonCheckbox, IonButton, IonItemDivider, IonLabel, IonModal, IonDatetimeButton, IonIcon, IonPopover } from '@ionic/angular/standalone';
import { ChartModule } from '../chartTensione/chart.module'
import { ChartCorrenteModule } from '../chart-corrente/chart-corrente.module';
import { ChartKiloWattModule } from '../chart-kilo-watt/chart-kilo-watt.module';
import { ChartkiloVoltAmpereModule } from './../chart-kilo-volt-ampere/chart-kilo-volt-ampere.module';
import { ChartKiloVoltAmpereReactModule } from '../chart-kilo-volt-ampere-react/chart-kilo-volt-ampere-react.module';
import { ChartCosPhiModule } from '../chart-cos-phi/chart-cos-phi.module';
import { Tension } from '../services/tensione.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HealthCheckService } from '../healt-check.service'


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonLabel, IonItemDivider, IonButton, IonCheckbox, IonItem, IonList, IonImg, IonDatetime, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader,
              IonCard, IonRow, IonCol, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, ChartModule, ChartCorrenteModule, ChartKiloWattModule, ChartkiloVoltAmpereModule,
              ChartKiloVoltAmpereReactModule, ChartCosPhiModule, RouterModule, IonModal, IonDatetimeButton, CommonModule, IonIcon, IonPopover, FormsModule ]
})

export class HomePage implements OnInit{
  @ViewChild('datetimeValue', { static: true })
  datetimeValue!: ElementRef;
  @ViewChild('datetime', { static: true })
  datetime!: IonDatetime;
  [x: string]: any;
  data: any
  data2: any
  _date = new Date().toISOString();
  dateValue: string = '';
  startDateValue: string = '';
  endDateValue: string = '';
  corrente: boolean = false;
  tensione: boolean = false;
  potenzaReatt: boolean = false;
  potenzaApp: boolean = false;
  cosPhi: boolean = false;
  potenzaAtt: boolean = false;
  TR1: boolean = false;
  TR2: boolean = false;
  FV: boolean = false;
  BS1: boolean = false;
  BS2: boolean = false;
  B9: boolean = false;
  isButtonEnabled: boolean = false;


  constructor(private apiService: Tension, private SharedService: SharedService) {}

  ngOnInit(){
    //this.loadData();
    this.data = this.SharedService.getData();
    this['healthCheckService'].startHealthCheck().subscribe((response: any) => {
      console.log('Health check response:', response);
    });

    const datetimeValue = document.querySelector('#datetimeValue') as HTMLElement;
    const datetime = document.querySelector('#datetime') as HTMLIonDatetimeElement;

    function setDateTimeValue(val: string) {
      if (val) {
      const date = new Date(val);
      const options: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
      };
        const text = date.toLocaleString('it-ITA', options).replace(',', '');
        datetimeValue.innerText = text;
        console.log('Selected date:', text); // Print the selected date
      } else {
        datetimeValue.innerText = 'Invalid date';
        console.log('Invalid date selected');
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      if (datetime && datetime.value) {
        setDateTimeValue(datetime.value as string);
      }
    });

    if (datetime) {
      datetime.addEventListener('ionChange', (e: CustomEvent) => {
        const value = e.detail.value;
        if (typeof value === 'string') {
          setDateTimeValue(value);
        } else if (Array.isArray(value)) {
          setDateTimeValue(value[0]); // Assuming you take the first value if it's an array
        }
      });
    }
  }

  existData(){
    
  }

  updateButtonState() {
  // Group 1: Elements from 'corrente' to 'potenzaReatt'
  const group1Selected = [
    this.corrente,
    this.tensione,
    this.cosPhi,
    this.potenzaApp,
    this.potenzaAtt,
    this.potenzaReatt
  ].some(Boolean); // Check if at least one checkbox from Group 1 is selected

  // Group 2: Elements from 'TR1' to 'B9'
  const group2Selected = [
    this.TR1,
    this.TR2,
    this.FV,
    this.BS1,
    this.BS2,
    this.B9
  ].some(Boolean); // Check if at least one checkbox from Group 2 is selected

  // Enable the button only if one checkbox is selected in each group
  this.isButtonEnabled = group1Selected && group2Selected;
}

  /*updateButtonState() {
  const selectedItemsCount = [
    this.corrente,
    this.tensione,
    this.cosPhi,
    this.potenzaApp,
    this.potenzaAtt,
    this.potenzaReatt,
    this.TR1,
    this.TR2,
    this.FV,
    this.BS1,
    this.BS2,
    this.B9
  ].filter(Boolean).length; // Count only truthy values (selected checkboxes)

  // Enable the button if at least 2 checkboxes are selected
  this.isButtonEnabled = selectedItemsCount >= 2;
}*/

  //updateButtonState() {
    //this.isButtonEnabled = this.corrente || this.tensione || this.cosPhi || this.potenzaApp || this.potenzaAtt || this.potenzaReatt;
  //}

  startDateChanged(event: Event) {
    const customEvent = event as CustomEvent;
    const value = customEvent.detail.value;
    this.startDateValue = this.processDateChange(value);
    this.updateDatetimeValue();
  }

  endDateChanged(event: Event) {
    const customEvent = event as CustomEvent;
    const value = customEvent.detail.value;
    this.endDateValue = this.processDateChange(value);
    this.updateDatetimeValue();
  }

  processDateChange(value: string | string[]): string {
    if (typeof value === 'string') {
      console.log('Date changed to:', value);
      return value;
    } else if (Array.isArray(value)) {
      console.log('Date changed to:', value[0]);
      return value[0];
    } else {
      console.log('Date changed to an invalid value');
      return '';
    }
  }

  formatDate(val: string | number | Date): string {
    const date = new Date(val);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Europe/Rome'
    };
    return date.toLocaleString('it-IT', options).replace(',', '');
  }

  updateDatetimeValue() {
    const datetimeValue = document.querySelector('#datetimeValue') as HTMLElement;
    if (this.startDateValue && this.endDateValue) {
      const formattedStartDate = this.formatDate(this.startDateValue);
      const formattedEndDate = this.formatDate(this.endDateValue);
      datetimeValue.innerText = `Start: ${formattedStartDate}, End: ${formattedEndDate}`;
    } else {
      datetimeValue.innerText = 'Invalid date';
    }
  }
  

  selectDate(){
    if( this.corrente == true){
      console.log("ciao")
    }
    this.apiService.selectRangeDate(this.startDateValue, this.endDateValue).subscribe(
      (data) => {
        console.log('Data:', data);
        this.data = data;
        //this.data2 = data;
        this.SharedService.setData(this.data)
      },
      error => {
        console.error('Error:', error);
        // Handle the error here
      }
    )
  }

  onChange(_date: Date){
    console.log(this.dateValue)
  }

  /*loadData() {
  this.apiService.getdata().subscribe(
    data => {
      console.log('Data:', data);
      this.data = data;
      // Handle the data here
    },
    error => {
      console.error('Error:', error);
      // Handle the error here
    }
  );
  }*/

  packageEstimatedDated: any[] = [];
  async validateDates(){
    console.log("selected dates length:", this.packageEstimatedDated.length)
    
    if(this.packageEstimatedDated.length === 3){
      console.log("after remove extra date", this.packageEstimatedDated)
      this.packageEstimatedDated.splice(0,1)
      console.log("after removed", this.packageEstimatedDated)
    }
  }

  question = {
    options: ['A', 'B'],
  };

  checkedItems = [];
  
}


function dateChanged(event: Event | undefined, CustomEvent: { new <T>(type: string, eventInitDict?: CustomEventInit<T> | undefined): CustomEvent<T>; prototype: CustomEvent<any>; }) {
  throw new Error('Function not implemented.');
}

