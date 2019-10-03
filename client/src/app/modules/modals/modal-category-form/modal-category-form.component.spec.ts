import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCategoryFormComponent } from './modal-category-form.component';

describe('ModalCategoryFormComponent', () => {
  let component: ModalCategoryFormComponent;
  let fixture: ComponentFixture<ModalCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
