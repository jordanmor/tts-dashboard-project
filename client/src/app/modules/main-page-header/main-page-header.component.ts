import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { Supplier } from 'src/app/core/models/supplier';
import { FilterData } from '../../core/models/filterData';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-main-page-header',
  templateUrl: './main-page-header.component.html',
  styleUrls: ['./main-page-header.component.css']
})
export class MainPageHeaderComponent implements OnInit {

  alertType: string = 'success';
  errorMessage: string;
  @Input() datasetTitle: string;
  @Input() datasetName: string;
  @Input() totalDataItems: number;
  @Input() categories: Category[];
  @Input() suppliers: Supplier[];
  @Output() onModalFormSubmit = new EventEmitter();
  @Output() onFilteredRequest = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getErrorMessage().subscribe(errorMessage => {
      this.errorMessage = errorMessage;
    });
  }

  hideAlert() {
    this.dataService.updateErrorMessage('');
  }

  openModal() {
    this.onModalFormSubmit.emit();
  }

  filteredRequest(filterData: FilterData) {
    this.onFilteredRequest.emit(filterData);
  }
}
