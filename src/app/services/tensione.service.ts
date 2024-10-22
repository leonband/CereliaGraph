import { HttpClient, HttpParams } from '@angular/common/http';
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

    selectRangeDate(requestBody: { transformers: string[], metrics: string[], startDate: string, endDate: string }): Observable<ApiResult> {
      let params = new HttpParams();
      params = params.append('startDate', requestBody.startDate);
      params = params.append('endDate', requestBody.endDate);

      // Append transformers and metrics as comma-separated values
      params = params.append('transformers', requestBody.transformers.join(','));
      params = params.append('metrics', requestBody.metrics.join(','));

      return this.http.get<ApiResult>(`${BASE_URL}/api/range_date`, { params: params });
    }

}