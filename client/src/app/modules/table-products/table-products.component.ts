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
  pages: Array<number> = [];
  currentPage: number;
  isSortDirectionAsc: boolean = true;
  sortBy: string = 'productId';
  orderByDiscount: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.showProducts(0, this.isSortDirectionAsc, this.sortBy);
  }

  goToPage(page: number) {
    this.showProductsSortedBy(this.sortBy, page);
  }

  prevPage() {
    this.currentPage -= 1
    this.showProductsSortedBy(this.sortBy, this.currentPage);
  }

  nextPage() {
    this.currentPage += 1
    this.showProductsSortedBy(this.sortBy, this.currentPage);
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
        this.products = data.content;
        this.pages = range(1, data.totalPages + 1);
        this.currentPage = data.number + 1;
      });
  }

}
