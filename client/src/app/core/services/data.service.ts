import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../models/paginatedResponse';
import { PaginatedRequest } from '../models/paginatedRequest';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  host: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getPaginatedData(paginatedRequest: PaginatedRequest): Observable<PaginatedResponse> {
    const { datasetName, page, pageSize, sortDirection, sortBy, orderByDiscount } = paginatedRequest;

    if(datasetName === 'products') {
      return this.http.get<PaginatedResponse>(
        `${this.host}/${datasetName}?page=${page}&pageSize=${pageSize}&direction=${sortDirection}&sortBy=${sortBy}&orderByDiscount=${orderByDiscount}`);
    } else {
      return this.http.get<PaginatedResponse>(`${this.host}/${datasetName}?page=${page}&pageSize=${pageSize}&direction=${sortDirection}&sortBy=${sortBy}`);
    }
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.host}/categories/all`);
  }

  getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.host}/suppliers/all`);
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
