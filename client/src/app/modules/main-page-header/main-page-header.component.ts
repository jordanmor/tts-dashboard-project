import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { Supplier } from 'src/app/core/models/supplier';
import { FilterData } from '../../core/models/filterData';

@Component({
  selector: 'app-main-page-header',
  templateUrl: './main-page-header.component.html',
  styleUrls: ['./main-page-header.component.css']
})
export class MainPageHeaderComponent implements OnInit {

  show: boolean = false;
  alertType: string = 'success';
  @Input() datasetTitle: string;
  @Input() datasetName: string;
  @Input() totalDataItems: number;
  @Input() categories: Category[];
  @Input() suppliers: Supplier[];
  @Output() onModalFormSubmit = new EventEmitter();
  @Output() onFilteredRequest = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  hideAlert() {
    this.show = false;
  }

  openModal() {
    this.onModalFormSubmit.emit();
  }

  filteredRequest(filterData: FilterData) {
    this.onFilteredRequest.emit(filterData);
  }
}
