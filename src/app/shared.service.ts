/*import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private data: any;
  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }


  setData(data: any) {
    this.dataSubject.next(data);
  }

  getDataObservable(): Observable<any> {
    return this.dataSubject.asObservable();
  }

  getData() {
    return this.data;
  }
}
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private dataAmp: any;
  private dataVolt: any;
  private dataKiloWatt: any;
  private dataKiloVoltAmpere: any;
  private dataKiloVar: any;
  private dataCosPhi: any;

  // BehaviorSubjects for each data type
  private ampSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private voltSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private kiloWattSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private kiloVoltAmpereSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private kiloVarSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private cosPhiSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {}

  setData(data: any) {
    // Split data for each metric and assign to respective subjects
    this.dataAmp = this.splitData(data, 'corrente');
    this.dataVolt = this.splitData(data, 'tensione');
    this.dataKiloWatt = this.splitData(data, 'potenzaAtt');
    this.dataKiloVoltAmpere = this.splitData(data, 'potenzaApp');
    this.dataKiloVar = this.splitData(data, 'potenzaReatt');
    this.dataCosPhi = this.splitData(data, 'cosPhi');

    // Update each BehaviorSubject with the relevant data
    this.ampSubject.next(this.dataAmp);
    this.voltSubject.next(this.dataVolt);
    this.kiloWattSubject.next(this.dataKiloWatt);
    this.kiloVoltAmpereSubject.next(this.dataKiloVoltAmpere);
    this.kiloVarSubject.next(this.dataKiloVar);
    this.cosPhiSubject.next(this.dataCosPhi);
  }

  // Helper function to split the data by metric
  private splitData(data: any, metric: string) {
    const chartData = [];
    for (const transformer in data) {
      if (data[transformer][metric]) {
        chartData.push(...data[transformer][metric]);
      }
    }
    return chartData;
  }

  // Observables for each dataset
  getAmpObservable(): Observable<any> {
    return this.ampSubject.asObservable();
  }

  getVoltObservable(): Observable<any> {
    return this.voltSubject.asObservable();
  }

  getKiloWattObservable(): Observable<any> {
    return this.kiloWattSubject.asObservable();
  }

  getKiloVoltAmpereObservable(): Observable<any> {
    return this.kiloVoltAmpereSubject.asObservable();
  }

  getKiloVarObservable(): Observable<any> {
    return this.kiloVarSubject.asObservable();
  }

  getCosPhiObservable(): Observable<any> {
    return this.cosPhiSubject.asObservable();
  }
}
