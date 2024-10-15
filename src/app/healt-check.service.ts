import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HealthCheckService {
  private apiUrl = 'https://your-api.com/healthcheck';  // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Method for polling the healthcheck endpoint recursively
  startHealthCheck() {
    return interval(30000)  // Polling every 30 seconds
      .pipe(
        switchMap(() => this.http.get(this.apiUrl)),
        catchError(error => {
          console.error('Health check failed', error);
          // Handle error (retry logic, notifications, etc.)
          return [];
        })
      );
  }
}