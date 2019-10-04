import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { PaginatedResponse } from '../models/paginatedResponse';
import { PaginatedRequest } from '../models/paginatedRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../models/category';
import { Supplier } from '../models/supplier';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // Heroku host for production
  host: string = 'https://ttsdashboard.herokuapp.com';

  // Local host and path for testing and development
//   host: string = 'http://localhost:8080';

  private messageSource = new BehaviorSubject<string>('');
  message = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  // --------- ERROR MESSAGING --------- //

  getErrorMessage() {
    return this.message;
  }

  updateErrorMessage(message: string) {
    this.messageSource.next(message);
  }

  // --------- CRUD OPERATIONS --------- //

  // GET PAGINATED DATA
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

  // GET ALL CATEGORIES
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.host}/categories/all`);
  }

  // GET ALL SUPPLIERS
  getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.host}/suppliers/all`);
  }

  // POST
  createItem(dataItem: any, datasetName: string) {
    return this.http.post(`${this.host}/${datasetName}`, dataItem)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        this.messageSource.next(err.error);
        return throwError(err);
      })
    )
  }

  // PUT
  updateData(dataItem: any, datasetName: string) {
    return this.http.put(`${this.host}/${datasetName}/${dataItem.id}`, dataItem)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.messageSource.next(err.error);
          window.scrollTo(0,0);
          return throwError(err);
        })
      )
  }

  // DELETE
  removeItem(id: number, datasetName: string) {
    return this.http.delete(`${this.host}/${datasetName}/${id}`)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        this.messageSource.next(err.error);
        return throwError(err);
      })
    )
  }
  
}
