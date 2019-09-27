import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaginatedResponse } from '../models/paginatedResponse';
import { Observable } from 'rxjs';
import { PaginatedRequest } from '../models/paginatedRequest';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  host: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getData(paginatedRequest: PaginatedRequest) {
    const datasetName = paginatedRequest.getDatasetName();
    const page = paginatedRequest.getPage();
    const pageSize = paginatedRequest.getPageSize();
    const sortDirection = paginatedRequest.getSortDirection();
    const sortBy = paginatedRequest.getSortBy();

    if(datasetName === 'products') {
      const orderByDiscount = paginatedRequest.getOrderByDiscount();
      return this.http.get<PaginatedResponse>(
        `${this.host}/${datasetName}?page=${page}&pageSize=${pageSize}&direction=${sortDirection}&sortBy=${sortBy}&orderByDiscount=${orderByDiscount}`);
    } else {
      return this.http.get<PaginatedResponse>(`${this.host}/${datasetName}?page=${page}&pageSize=${pageSize}&direction=${sortDirection}&sortBy=${sortBy}`);
    }
  }

  removeItem(datasetName:string, id: number): Observable<{}> {
    const url = `${this.host}/${datasetName}/${id}`;
    return this.http.delete(url);
  }
}
