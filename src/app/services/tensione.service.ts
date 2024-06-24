import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiResult } from './interfaces';
import { environment } from 'src/environments/environment';

const BASE_URL = 'http://127.0.0.1:5000';

@Injectable({
  providedIn: 'root',
})

export class Tension {
    constructor(private http: HttpClient) {}

    getdata(): Observable<ApiResult>{
        return this.http.get<ApiResult>(`${BASE_URL}/api/porzionatrice_stop_cycle`);
    }
}