import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../../../core/models/category';
import { Supplier } from 'src/app/core/models/supplier';
import { ValidatePrice } from '../../../shared/priceValidator';

@Component({
  selector: 'app-modal-product-form',
  templateUrl: './modal-product-form.component.html',
  styleUrls: ['./modal-product-form.component.css']
})
export class ModalProductFormComponent implements OnInit {

  @Input() id: number;
  @Input() categories: Category[];
  @Input() suppliers: Supplier[];
  addProductForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) { 
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.addProductForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      fullPrice: ['', [Validators.required]],
      salePrice: ['', [Validators.required]],
      category: this.formBuilder.group({
        id: ['', [Validators.required]]
      }),
      supplier: this.formBuilder.group({
        id: ['', [Validators.required]]
      }),
      availability: ''
    }, {validators: ValidatePrice});
  }

  submitForm() {
    this.activeModal.close(this.addProductForm.value);
  }

}
