import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/http/api.service';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  datasetTitle = {
    singular: "Product",
    plural: "Products"
  };
  dataset: Product[];
  currentPage: number;
  totalElements: number;
  pageSize: number;
  isSortDirectionAsc: boolean = true;
  sortBy: string = 'productId';
  orderByDiscount: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.showProducts(0, this.isSortDirectionAsc, this.sortBy);
  }

  handleShowProductsSortedBy(sortBy: string, page: number = 0) {
    if(page === 0) {
      this.isSortDirectionAsc = !this.isSortDirectionAsc;
      this.sortBy = sortBy;
    } else {
      page -= 1;
    }
    if(sortBy === 'discount') {
      this.showProducts(page, this.isSortDirectionAsc, this.sortBy, true);
    } else {
      this.orderByDiscount = false;
      this.showProducts(page, this.isSortDirectionAsc, this.sortBy);
    }
  }

  showProducts(page: number, isSortDirectionAsc: boolean, sortBy: string, orderByDiscount: boolean =  false) {
    let direction: string;
    if (isSortDirectionAsc) {
      direction = 'ASC';
    } else {
      direction = 'DESC';
    }
    this.api.getProducts(page, direction, sortBy, orderByDiscount)
      .subscribe(data => {
        this.dataset = data.content;
        this.totalElements = data.totalElements;
        this.pageSize = data.size;
        this.currentPage = data.number + 1;
      });
  }

  // Handle pagination
  handlePageChange(page: number) {
    this.handleShowProductsSortedBy(this.sortBy, page);
  }

}
