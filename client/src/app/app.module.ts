import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeaderComponent } from './core/header/header.component';
import { ModalProductFormComponent } from './modules/products/modal-product-form/modal-product-form.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MainPageHeaderComponent } from './modules/main-page-header/main-page-header.component';
import { ProductsComponent } from './modules/products/products.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { SuppliersComponent } from './modules/suppliers/suppliers.component';
import { ModalCategoryFormComponent } from './modules/categories/modal-category-form/modal-category-form.component';
import { ModalSupplierFormComponent } from './modules/suppliers/modal-supplier-form/modal-supplier-form.component';
import { MainComponent } from './modules/main/main.component';
import { TableComponent } from './modules/table/table.component';
import { DataService } from './core/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ModalProductFormComponent,
    MainPageHeaderComponent,
    ProductsComponent,
    CategoriesComponent,
    SuppliersComponent,
    ModalCategoryFormComponent,
    ModalSupplierFormComponent,
    MainComponent,
    TableComponent
  ],
  imports: [
BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [NgbActiveModal, DataService],
  entryComponents: [
    ModalProductFormComponent, 
    ModalCategoryFormComponent,
    ModalSupplierFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
