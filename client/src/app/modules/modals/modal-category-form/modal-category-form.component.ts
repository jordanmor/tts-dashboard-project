import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-category-form',
  templateUrl: './modal-category-form.component.html',
  styleUrls: ['./modal-category-form.component.css']
})
export class ModalCategoryFormComponent implements OnInit {

  @Input() id: number;
  addCategoryForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
    ) {
      this.createForm();
     }

  ngOnInit() {
  }

  createForm() {
    this.addCategoryForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }
  submitForm() {
    this.activeModal.close(this.addCategoryForm.value);
  }

}
