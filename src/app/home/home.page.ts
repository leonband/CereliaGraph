import { Component, OnInit, inject, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonDatetime, IonImg, IonList, IonItem, IonCheckbox, IonButton, IonItemDivider, IonLabel, IonModal, IonDatetimeButton } from '@ionic/angular/standalone';
import type { EChartsOption } from 'echarts';
import { ChartModule } from '../chartTensione/chart.module'
import { Tension } from '../services/tensione.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItemDivider, IonButton, IonCheckbox, IonItem, IonList, IonImg, IonDatetime, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonRow, IonCol, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, ChartModule, RouterModule, IonModal, IonDatetimeButton, CommonModule],
})
export class HomePage implements OnInit{
[x: string]: any;
  data: any
  _date = new Date().toISOString();
  dateValue: string = '';
  startDateValue: string = '';
  endDateValue: string = '';

  constructor(private apiService: Tension) {}

  ngOnInit(){
    //this.loadData();

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
        const text = date.toLocaleString('en-US', options).replace(',', '');
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
    this.apiService.selectRangeDate(this.startDateValue, this.endDateValue).subscribe(
      (data) => {
        console.log('Data:', data);
        this.data = data;
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

  /*onChange(item) {
    if (this.checkedItems.includes(item)) {
      this.checkedItems = this.checkedItems.filter((value: any) => value != item);
      console.log('ciao ciao');
    } else {
      this.checkedItems.push(item);
      console.log('Bau ciao');
    }
  }*/
  
}

function dateChanged(event: Event | undefined, CustomEvent: { new <T>(type: string, eventInitDict?: CustomEventInit<T> | undefined): CustomEvent<T>; prototype: CustomEvent<any>; }) {
  throw new Error('Function not implemented.');
}

