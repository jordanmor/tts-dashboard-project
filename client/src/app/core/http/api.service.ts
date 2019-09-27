import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaginatedResponse } from '../models/paginatedResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  host: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getData(datasetName: string, page: number, direction: string, sortBy: string, orderByDiscount: boolean = false) {
    if(datasetName === 'products') {
      return this.http.get<PaginatedResponse>(`${this.host}/${datasetName}?page=${page}&direction=${direction}&sortBy=${sortBy}&orderByDiscount=${orderByDiscount}`);
    } else {
      return this.http.get<PaginatedResponse>(`${this.host}/${datasetName}?page=${page}&direction=${direction}&sortBy=${sortBy}`);
    }
  }

  removeItem(datasetName:string, id: number): Observable<{}> {
    const url = `${this.host}/${datasetName}/${id}`;
    return this.http.delete(url);
  }
}
