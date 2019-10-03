import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSupplierFormComponent } from './modal-supplier-form.component';

describe('ModalSupplierFormComponent', () => {
  let component: ModalSupplierFormComponent;
  let fixture: ComponentFixture<ModalSupplierFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSupplierFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSupplierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
