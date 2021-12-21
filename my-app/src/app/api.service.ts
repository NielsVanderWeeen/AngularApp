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
    return this.httpClient.get<Array<Driver>>(`http://localhost:5012/Drivers`);
  }

  getNews(): Observable<News[]>{
    return this.httpClient.get<Array<News>>(`http://localhost:5012/News`);
  }
}
