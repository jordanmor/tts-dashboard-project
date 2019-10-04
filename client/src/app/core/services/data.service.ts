import { Injectable } from '@angular/core';
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

  // Heroku host for production
  host: string = 'https://ttsdashboard.herokuapp.com';

  // Local host and path for testing and development
  // host: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getPaginatedData(paginatedRequest: PaginatedRequest): Observable<PaginatedResponse> {
    const { datasetName, page, pageSize, sortDirection, sortBy, sortByDiscount, filtered } = paginatedRequest;

    if(datasetName === 'products') {
      if(filtered) {
        const { filterBy, filterAlsoBy } = paginatedRequest;
        // Filtered product request
        return this.http.get<PaginatedResponse>(
          `${this.host}/${datasetName}?page=${page}&pageSize=${pageSize}&direction=${sortDirection}&sortBy=${sortBy}&sortByDiscount=${sortByDiscount}&filtered=true&filterBy=${filterBy}&filterAlsoBy=${filterAlsoBy}`);
      }
      // Non-filtered product request
      return this.http.get<PaginatedResponse>(
        `${this.host}/${datasetName}?page=${page}&pageSize=${pageSize}&direction=${sortDirection}&sortBy=${sortBy}&sortByDiscount=${sortByDiscount}`);
    } else {
      // Category or supplier request
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
