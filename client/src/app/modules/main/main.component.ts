import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Data } from 'src/app/core/models/data';
import { PaginatedRequest } from '../../core/models/paginatedRequest';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProductFormComponent } from '../../modules/products/modal-product-form/modal-product-form.component';
import { ModalCategoryFormComponent } from '../categories/modal-category-form/modal-category-form.component';
import { ModalSupplierFormComponent } from '../suppliers/modal-supplier-form/modal-supplier-form.component';
import { Category } from 'src/app/core/models/category';
import { Supplier } from 'src/app/core/models/supplier';
import { FilterData } from '../../core/models/filterData';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() datasetName: string;
  @Input() datasetTitle: object;

  data: Data = new Data();
  categories: Category[];
  suppliers: Supplier[];

  constructor(
    private dataService: DataService, 
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.data.datasetName = this.datasetName;
    this.showData(this.createPaginatedRequest(this.data));
    this.dataService.getAllCategories().subscribe(categories => this.categories = categories);
    this.dataService.getAllSuppliers().subscribe(suppliers => {
      this.suppliers = suppliers;
    });
  }

  // Handle pagination
  handlePageChange(page: number) {
    this.data.currentPage = page;
    this.showData(this.createPaginatedRequest(this.data));
  }

  handleRemoveItem(id: number) {
    this.dataService.removeItem(id, this.datasetName).subscribe(res => {
      this.showData(this.createPaginatedRequest(this.data));
    });
  }

  handleUpdateDataItem(dataItem: any) {
    this.dataService.updateData(dataItem, this.datasetName).subscribe(res => {
      this.showData(this.createPaginatedRequest(this.data));
    });
  }

  handleSortDataBy(sortBy: string) {
    this.data.isSortDirectionAsc = !this.data.isSortDirectionAsc;
    this.data.sortBy = sortBy;
    this.data.sortByDiscount = sortBy === 'discount' ? true : false;
    this.data.currentPage = 1;
    this.showData(this.createPaginatedRequest(this.data));
  }

  showData(paginatedRequest: PaginatedRequest) {
    this.dataService.getPaginatedData(paginatedRequest).subscribe(response => {
      this.data.dataset = response.content;
      this.data.currentPage = response.number + 1;  // page numbers from server start at 0 
      this.data.totalElements = response.totalElements;
      this.data.pageSize = response.size;
    });
  }

  handleFilteredRequest(filterData: FilterData) {
    if(!filterData.filtered) {
      // Reset sort and current page
      this.data.isSortDirectionAsc = true;
      this.data.sortBy = 'id';
      this.data.currentPage = 1;
    }
    this.data.filtered = filterData.filtered;
    this.data.filterBy = filterData.filterBy;
    this.data.filterAlsoBy = filterData.filterAlsoBy;
    this.data.filterName1 = filterData.filterName1;
    this.data.filterName2 = filterData.filterName2;
    this.showData(this.createPaginatedRequest(this.data));
  }

  createPaginatedRequest(data: Data): PaginatedRequest {
    const { datasetName, currentPage, pageSize, isSortDirectionAsc, sortBy, sortByDiscount, filtered } = data;
    let sortDirection = isSortDirectionAsc ? 'ASC' : 'DESC';
    if(filtered) {
      const { filterBy, filterAlsoBy } = data;
      return new PaginatedRequest(datasetName, currentPage, pageSize, sortDirection, sortBy, sortByDiscount, filtered, filterBy, filterAlsoBy);
    }
    return new PaginatedRequest(datasetName, currentPage, pageSize, sortDirection, sortBy, sortByDiscount);
  }

  handleModalFormSubmit() {
    let modalRef: any;
    if(this.datasetName === 'products') {
      modalRef = this.modalService.open(ModalProductFormComponent);
      modalRef.componentInstance.categories = this.categories;
      modalRef.componentInstance.suppliers = this.suppliers;
      modalRef.componentInstance.id = 1;
    } else if(this.datasetName === 'categories') {
      modalRef = this.modalService.open(ModalCategoryFormComponent);
      modalRef.componentInstance.id = 2;
    } else if(this.datasetName === 'suppliers') {
      modalRef = this.modalService.open(ModalSupplierFormComponent);
      modalRef.componentInstance.id = 3;
    }
    modalRef.result.then((result: any) => {
      this.dataService.createItem(result, this.datasetName).subscribe(res => {
        this.showData(this.createPaginatedRequest(this.data));
      });
    }).catch((error) => {
      // console.log(error);
    });
  }

  choosePageSize(pageSize: number) {
    this.data.pageSize = pageSize;
    this.data.currentPage = 1;
    this.showData(this.createPaginatedRequest(this.data));
  }
}
