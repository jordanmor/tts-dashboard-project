import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Category } from 'src/app/core/models/category';
import { Supplier } from 'src/app/core/models/supplier';
import { FilterData } from 'src/app/core/models/filterData';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() datasetName: string;
  @Input() categories: Category[];
  @Input() suppliers: Supplier[];
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
      this.filteredRequest(filterData);
    } else {
      this.setFilterData();
      filterData.filterBy = `${this.filterBy}+${this.filterByValue}`;
      filterData.filterAlsoBy = this.filterAlsoByValue === '' ? this.filterAlsoBy : `${this.filterAlsoBy}+${this.filterAlsoByValue}`;
      filterData.filterName1 = this.filterBy;
      filterData.filterName2 = this.filterAlsoBy;
      this.filteredRequest(filterData);
    }
  }

  setFilterData() {
    this.filterBy = this.filterForm.get('filterBy').value;
    this.filterByValue = this.filterForm.get('filterByValue').value;
    this.filterAlsoByValue = this.filterForm.get('filterAlsoByValue').value;
    this.filterAlsoBy = this.filterForm.get('filterAlsoBy').value;
    // Handles submission of filter with availability pre-checked
    if(this.filterBy === 'availability' && this.filterByValue === '') {
      this.filterByValue = true;
    }
    // Handles submission of filter with availability pre-checked
    if(this.filterAlsoBy === 'availability' && this.filterAlsoByValue === '') {
      this.filterAlsoByValue = true;
    }
  }

}
