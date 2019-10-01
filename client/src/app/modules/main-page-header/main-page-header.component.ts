import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  filterOn: boolean = false;
  filterBy: string;
  filterByValue: any;
  filterAlsoBy: string;
  filterAlsoByValue: any;
  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createFilterForm();
   }

  ngOnInit() {
    this.filterBy = '';
    this.filterByValue = '';
    this.filterAlsoBy = 'none';
  }

  hideAlert() {
    this.show = false;
  }

  openModal() {
    this.onModalFormSubmit.emit();
  }

  filteredRequest(filterData: any) {
    this.onFilteredRequest.emit(filterData);
  }

  setFilterBy($event: any) {
    this.filterAlsoBy = 'none'
    this.filterByValue = '';
    this.filterBy = $event.target.value;
  }

  setFilterByValue($event: any) {
    this.filterByValue = $event.target.value;
    // this.filterAlsoBy = 'none'
    if(this.filterOn) {
      console.log(this.filterForm.value);
    }
  }

  setSecondFilterBy($event: any) {
    this.filterAlsoBy = $event.target.value;
  }

  createFilterForm() {
    this.filterForm = this.formBuilder.group({
      filterBy: '',
      filterByValue: '',
      filterAlsoBy: 'none',
      filterAlsoByValue: ''
    });
  }

  reset() {
    this.filterBy = '';
    this.filterByValue = '';
    this.filterAlsoBy = 'none';
    this.createFilterForm();
  }

  onSubmitFilterForm() {
    let filterData: FilterData = new FilterData();
    this.filterOn = !this.filterOn; // toggle filter
    filterData.filtered = this.filterOn;
    if(!this.filterOn) {
      this.reset();
      filterData.filterBy = '';
      filterData.filterAlsoBy = 'none';
    } else {
      this.setFilterData();
      filterData.filterBy = `${this.filterBy}+${this.filterByValue}`;
      filterData.filterAlsoBy = `${this.filterAlsoBy}+${this.filterAlsoByValue}`;
    }
    this.filteredRequest(filterData);
  }

  setFilterData() {
    this.filterBy = this.filterForm.get('filterBy').value;
    this.filterByValue = this.filterForm.get('filterByValue').value;
    // Handles submission of filter with availability pre-checked
    if(this.filterBy === 'availability' && this.filterByValue === '') {
      this.filterByValue = true;
    }
    this.filterAlsoBy = this.filterForm.get('filterAlsoBy').value;
    this.filterAlsoByValue = this.filterForm.get('filterAlsoByValue').value;
    // Handles submission of filter with availability pre-checked
    if(this.filterAlsoBy === 'availability' && this.filterAlsoByValue === '') {
      this.filterAlsoByValue = true;
    }
  }
}
