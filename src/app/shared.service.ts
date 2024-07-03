import { Injectable } from '@angular/core';
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