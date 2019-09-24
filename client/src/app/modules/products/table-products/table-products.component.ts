import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../core/http/api.service';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})

export class TableProductsComponent implements OnInit {

  @Input() products: Product[];
  @Output() onShowProductsSortedBy = new EventEmitter();

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  showProductsSortedBy(productField: string) {
    this.onShowProductsSortedBy.emit(productField);
  }

}
