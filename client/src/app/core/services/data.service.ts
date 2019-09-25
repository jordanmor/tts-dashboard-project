import { Injectable } from '@angular/core';
import { ApiService } from '../../core/http/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Data } from '../models/data';
import { PaginatedResponse } from '../models/paginatedResponse';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private dataSource = new BehaviorSubject<Data>(new Data());
  data = this.dataSource.asObservable();

  constructor(private api: ApiService) { }

  sortDataBy(sortBy: string, page: number, datasetName: string) {
    let sortDirection = !this.dataSource.value.isSortDirectionAsc;
    this.showData(datasetName, page, sortDirection, sortBy);
  }

  showData(datasetName: string, page: number, isSortDirectionAsc: boolean, sortBy: string) {
    let orderByDiscount = false;

    if(page !== 0) {
      page -= 1;
    }

    let direction: string;
    if (isSortDirectionAsc) {
      direction = 'ASC';
    } else {
      direction = 'DESC';
    }

    let response: Observable<PaginatedResponse>;

    if(datasetName === 'products') {
      if(sortBy === 'discount') {
        orderByDiscount = true;
        response = this.api.getData(datasetName, page, direction, sortBy, true);
      } else {
        response = this.api.getData(datasetName, page, direction, sortBy, false);
      }
    } else {
      response = this.api.getData(datasetName, page, direction, sortBy);
    }
    
    response.subscribe(data => {
      const newDataset = new Data({
        dataSetName: datasetName,
        dataset: data.content,
        currentPage: data.number + 1,
        totalElements: data.totalElements,
        pageSize: data.size,
        isSortDirectionAsc: isSortDirectionAsc,
        sortBy: sortBy
      });

      if(datasetName = 'products') {
        newDataset.orderByDiscount = orderByDiscount;
      }
      this.dataSource.next(newDataset);
    });
  }
}
