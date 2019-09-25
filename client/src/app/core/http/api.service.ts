import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginatedResponse } from '../models/paginatedResponse';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getData(datasetName: string, page: number, direction: string, sortBy: string, orderByDiscount: boolean = false) {
    if(datasetName === 'products') {
      return this.http.get<PaginatedResponse>(`http://localhost:8080/${datasetName}?page=${page}&direction=${direction}&sortBy=${sortBy}&orderByDiscount=${orderByDiscount}`);
    } else {
      return this.http.get<PaginatedResponse>(`http://localhost:8080/${datasetName}?page=${page}&direction=${direction}&sortBy=${sortBy}`);
    }
  }
}
