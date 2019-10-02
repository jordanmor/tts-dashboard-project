import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Category } from '../../core/models/category';
import { Supplier } from '../../core/models/supplier';
import { Product } from '../../core/models/product';
import { Data } from '../../../../temp/data copy';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() datasetName: string;
  @Input() data: Data;
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

  createProductForm() {
    this.updateProductForm = this.formBuilder.group({
      id: '',
      name: '',
      fullPrice: '',
      salePrice: '',
      category: this.formBuilder.group({
        id: ''
      }),
      supplier: this.formBuilder.group({
        id: ''
      }),
      availability: ''
    });
  }

  createItemForm() {
    this.updateItemForm = this.formBuilder.group({
      id: '',
      name: ''
    });
  }

  sortDataBy(productField: string) {
    this.onSortDataBy.emit(productField);
  }

  editItem(data: any) {
    this.selectedId = data.id;
  }

  cancelEdit() {
    this.selectedId = 0;
  }

  updateDataItem(dataItem: any) {
    if(this.datasetName === 'products') {
      this.onUpdateDataItem.emit(this.getUpdatedProduct(dataItem))
      this.createProductForm();
    } else {
      this.onUpdateDataItem.emit(this.getUpdatedItem(dataItem));
      this.createItemForm();
    }
    this.selectedId = 0;
  }

  getUpdatedItem(dataItem: any) {
    return {
      id: dataItem.id,
      name: this.updateItemForm.get('name').value === '' ? dataItem.name : this.updateItemForm.get('name').value
    }
  }

  getUpdatedProduct(dataItem: Product): Product {
      const id = dataItem.id;
      const name = this.updateProductForm.get('name').value === '' ? dataItem.name : this.updateProductForm.get('name').value;
      const fullPrice = this.updateProductForm.get('fullPrice').value === '' ? dataItem.fullPrice : this.updateProductForm.get('fullPrice').value;
      const salePrice = this.updateProductForm.get('salePrice').value === '' ? dataItem.salePrice : this.updateProductForm.get('salePrice').value;
      const categoryId = this.updateProductForm.get('category.id').value === '' ? dataItem.category.id : parseInt(this.updateProductForm.get('category.id').value);
      const supplierId = this.updateProductForm.get('supplier.id').value === '' ? dataItem.supplier.id : parseInt(this.updateProductForm.get('supplier.id').value);
      const availability = this.updateProductForm.get('availability').value === '' ? dataItem.availability : this.updateProductForm.get('availability').value;

      return new Product(id, name,fullPrice,salePrice,categoryId,supplierId,availability);
  }

  removeItem(data: any) {
    this.onRemoveItem.emit(data.id);
  }
}
