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

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.showProducts();
  }

  showProducts() {
    this.api.getProducts()
      .subscribe(data => {
        console.log(data);
        this.products = data.content;
        this.pages = range(1, data.totalPages + 1);
        this.currentPage = data.number + 1;
        console.log(this.currentPage);
      });
  }

}
