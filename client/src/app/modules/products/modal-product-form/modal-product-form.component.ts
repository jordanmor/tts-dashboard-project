import { Component, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Category } from '../../../core/models/category';
import { Supplier } from 'src/app/core/models/supplier';

@Component({
  selector: 'app-modal-product-form',
  templateUrl: './modal-product-form.component.html',
  styleUrls: ['./modal-product-form.component.css']
})
export class ModalProductFormComponent {

  @Input() id: number;
  @Input() categories: Category[];
  @Input() suppliers: Supplier[];
  myForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) { 
    this.createForm();
  }

  createForm() {
    this.myForm = this.formBuilder.group({
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
  submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}
