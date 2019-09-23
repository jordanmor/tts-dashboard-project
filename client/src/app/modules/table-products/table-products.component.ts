import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/http/api.service';
import { Product } from '../../core/models/product';
import { range } from 'lodash';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})

export class TableProductsComponent implements OnInit {

  products: Array<Product>;
  currentPage: number;
  totalProducts: number;
  pageSize: number;
  isSortDirectionAsc: boolean = true;
  sortBy: string = 'productId';
  orderByDiscount: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.showProducts(0, this.isSortDirectionAsc, this.sortBy);
  }

  showProductsSortedBy(sortBy: string, page: number = 0) {
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
        console.log(data);
        this.products = data.content;
        this.totalProducts = data.totalElements;
        this.pageSize = data.size;
        this.currentPage = data.number + 1;
      });
  }

  // Handle pagination
  handlePageChange(page: number) {
    this.showProductsSortedBy(this.sortBy, page);
  }

}
