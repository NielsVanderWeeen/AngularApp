import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Driver } from './drivers';
import { News } from './home';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getDriversInformation(): Observable<Driver[]>{
    return this.httpClient.get<Driver[]>(`${environment.baseURL}drivers.json`);
  }

  getNews(): Observable<News[]>{
    return this.httpClient.get<News[]>(`${environment.baseURL}news.json`);
  }
}
