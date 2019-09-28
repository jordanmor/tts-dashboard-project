import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../models/paginatedResponse';
import { PaginatedRequest } from '../models/paginatedRequest';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  host: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getData(paginatedRequest: PaginatedRequest): Observable<PaginatedResponse> {
    const { datasetName, page, pageSize, sortDirection, sortBy, orderByDiscount } = paginatedRequest;

    if(datasetName === 'products') {
      return this.http.get<PaginatedResponse>(
        `${this.host}/${datasetName}?page=${page}&pageSize=${pageSize}&direction=${sortDirection}&sortBy=${sortBy}&orderByDiscount=${orderByDiscount}`);
    } else {
      return this.http.get<PaginatedResponse>(`${this.host}/${datasetName}?page=${page}&pageSize=${pageSize}&direction=${sortDirection}&sortBy=${sortBy}`);
    }
  }

  removeItem(id: number, datasetName: string) {
    return this.http.delete(`${this.host}/${datasetName}/${id}`);
  }

  updateData(dataItem: any, datasetName: string) {
    return this.http.put(`${this.host}/${datasetName}/${dataItem.id}`, dataItem);
  }

  createItem(dataItem: any, datasetName: string) {
    return this.http.post(`${this.host}/${datasetName}`, dataItem);
  }
}
