import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-category-form',
  templateUrl: './modal-category-form.component.html',
  styleUrls: ['./modal-category-form.component.css']
})
export class ModalCategoryFormComponent implements OnInit {

  @Input() id: number;
  myForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
    ) {
      this.createForm();
     }

  ngOnInit() {
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      name: ''
    });
  }
  submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}
