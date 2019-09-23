import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/http/api.service';
import { Product } from '../../core/models/product';
import { range, round } from 'lodash';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})

export class TableProductsComponent implements OnInit {

  products: Array<Product>;
  pages: Array<number> = [];
  currentPage: number;
  round: any = round;
  isSortDirectionDefault: boolean = true;
  sortBy: string = 'productId';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.showProducts(0, this.isSortDirectionDefault, this.sortBy);
  }

  sortProducts(sortBy: string) {
    this.isSortDirectionDefault = !this.isSortDirectionDefault;
    this.sortBy = sortBy;
    this.showProducts(0, this.isSortDirectionDefault, this.sortBy);
  }

  orderProductsByDiscount() {
    this.isSortDirectionDefault = !this.isSortDirectionDefault;
    this.showProducts(0, this.isSortDirectionDefault, this.sortBy, true);
  }

  showProducts(page?: number, isSortDirectionDefault?: boolean, sortBy?: string, orderByDiscount?: boolean) {
    let direction: string;
    if (isSortDirectionDefault) {
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
