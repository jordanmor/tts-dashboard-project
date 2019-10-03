import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../../core/models/category';
import { Supplier } from '../../core/models/supplier';
import { Product } from '../../core/models/product';
import { PaginatedData } from '../../core/models/paginatedData';
import { FilterData } from '../../core/models/filterData';
import { ValidatePrice } from 'src/app/shared/priceValidator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() datasetName: string;
  @Input() data: PaginatedData;
  @Input() filterData: FilterData;
  @Input() categories: Category[];
  @Input() suppliers: Supplier[];
  @Output() onUpdateDataItem = new EventEmitter();
  @Output() onRemoveItem = new EventEmitter();
  @Output() onSortDataBy = new EventEmitter();
  selectedId: number;
  updateItemForm: FormGroup;
  updateProductForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createItemForm();
    this.createProductForm();
   }

  ngOnInit() {

  }

  // --------- CREATE FORM -------- //

  createProductForm() {
    this.updateProductForm = this.formBuilder.group({
      id: '', // not editable by user
      name: ['', [Validators.required]],
      fullPrice: ['', [Validators.required]],
      salePrice: ['', [Validators.required]],
      category: this.formBuilder.group({
        id: ''
      }),
      supplier: this.formBuilder.group({
        id: ''
      }),
      availability: ''
    }, 
    {validators: ValidatePrice});
  }

  // Form for category and supplier data
  createItemForm() {
    this.updateItemForm = this.formBuilder.group({
      id: '',
      name: ''
    });
  }

  // ------------ SORT ------------- //

  sortDataBy(productField: string) {
    this.onSortDataBy.emit(productField);
  }

  // ------------ DELETE ----------- //

  removeItem(data: any) {
    this.onRemoveItem.emit(data.id);
  }

  // ------------ EDIT ------------- //

  editItem(data: any) {
    this.selectedId = data.id;
    if(this.datasetName === 'products') {
      this.updateFormWithSelectedProductValues(data);
    } else if(this.datasetName = 'categories'){
      this.updateFormWithSelectedCategoryValues(data);
    } else if (this.datasetName = 'suppliers') {
      this.updateFormWithSelectedSupplierValues(data);
    }
  }

  cancelEdit() {
    this.selectedId = 0;
  }

  updateFormWithSelectedProductValues(dataItem: Product): void {
    const currentProduct: Product = new Product(
      dataItem.id,
      dataItem.name,
      dataItem.fullPrice,
      dataItem.salePrice,
      dataItem.category,
      dataItem.supplier,
      dataItem.availability
    );
    this.updateProductForm.patchValue(currentProduct);
  }

  updateFormWithSelectedCategoryValues(dataItem: Category): void {
    const currentCategory = new Category();
    currentCategory.setId(dataItem.id);
    currentCategory.setName(dataItem.name);
    this.updateItemForm.patchValue(currentCategory);
  }

  updateFormWithSelectedSupplierValues(dataItem: Supplier): void {
    const currentSupplier = new Supplier();
    currentSupplier.setId(dataItem.id);
    currentSupplier.setName(dataItem.name);
    this.updateItemForm.patchValue(currentSupplier);
  }

  // ----------- UPDATE ----------- //

  // Updated form data is sent to main component where 
  // it will be sent as a paginated request to the server
  updateItem() {
    if(this.datasetName === 'products') {
      this.onUpdateDataItem.emit(this.getUpdatedProduct());
      this.createProductForm();
    } else if(this.datasetName = 'categories') {
      this.onUpdateDataItem.emit(this.getUpdatedCategory());
    } else if (this.datasetName = 'suppliers') {
      this.onUpdateDataItem.emit(this.getUpdatedSupplier());
    }
    this.selectedId = 0;
  }

  getUpdatedProduct(): Product {
    const category = new Category();
    const supplier = new Supplier();
    const id = this.updateProductForm.get('id').value;
    const name = this.updateProductForm.get('name').value;
    const fullPrice = this.updateProductForm.get('fullPrice').value;
    const salePrice = this.updateProductForm.get('salePrice').value;
    category.setId(this.updateProductForm.get('category.id').value);
    supplier.setId(this.updateProductForm.get('supplier.id').value);
    const availability = this.updateProductForm.get('availability').value;

    return new Product(id, name,fullPrice,salePrice,category,supplier,availability);
  }

  getUpdatedCategory(): Category {
    const category = new Category();
    category.setId(this.updateItemForm.get('id').value);
    category.setName(this.updateItemForm.get('name').value);
    return category;
  }

  getUpdatedSupplier(): Supplier {
    const supplier = new Supplier();
    supplier.setId(this.updateItemForm.get('id').value);
    supplier.setName(this.updateItemForm.get('name').value);
    return supplier;
  }
}
