import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginatedResponse } from '../models/paginatedResponse';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get('http://localhost:8080/categories');
  }

  getProducts(page: number = 0, direction: string = 'ASC', sortBy: string = 'productId', orderByDiscount: boolean = false) {
    return this.http.get<PaginatedResponse>(`http://localhost:8080/products?page=${page}&direction=${direction}&sortBy=${sortBy}&orderByDiscount=${orderByDiscount}`);
  }
}
