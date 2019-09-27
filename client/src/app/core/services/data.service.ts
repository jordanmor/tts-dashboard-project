import { Injectable } from '@angular/core';
import { ApiService } from '../../core/http/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Data } from '../models/data';
import { PaginatedResponse } from '../models/paginatedResponse';
import { PaginatedRequest } from '../models/paginatedRequest';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private dataSource = new BehaviorSubject<Data>(new Data());
  data = this.dataSource.asObservable();

  constructor(private api: ApiService) { }

  sortDataBy(sortBy: string) {
    const data = this.dataSource.value;
    const { paginatedRequest } = data;
    data.isSortDirectionAsc = !data.isSortDirectionAsc;
    paginatedRequest.setSortDirection(data.isSortDirectionAsc);
    data.sortBy = sortBy;
    paginatedRequest.setSortBy(data.sortBy);
    this.showData(paginatedRequest);
  }

  showData(paginatedRequest: PaginatedRequest ) {

    let response: Observable<PaginatedResponse>;

    if(paginatedRequest.getSortBy() === 'discount') {
      console.log('discount');
      this.dataSource.value.orderByDiscount = true;
      paginatedRequest.setOrderByDiscount(true);
    }

    response = this.api.getData(paginatedRequest);
    
    response.subscribe(data => {
      const newDataset = new Data({
        datasetName: paginatedRequest.getDatasetName(),
        dataset: data.content,
        currentPage: data.number + 1, // page numbers from server start at 0 
        totalElements: data.totalElements,
        pageSize: data.size,
        isSortDirectionAsc: this.dataSource.value.isSortDirectionAsc,
        sortBy: paginatedRequest.getSortBy(),
        orderByDiscount: paginatedRequest.getOrderByDiscount()
      });
      this.dataSource.next(newDataset);
    });
  }

  removeItem(datasetName:string, id: number) {
    this.api.removeItem(datasetName, id).subscribe(s => 
      this.showData(this.dataSource.value.paginatedRequest));
  }
}
