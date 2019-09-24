import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeaderComponent } from './core/header/header.component';
import { TableProductsComponent } from './modules/products/table-products/table-products.component';
import { ModalProductFormComponent } from './modules/products/modal-product-form/modal-product-form.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MainPageHeaderComponent } from './shared/main-page-header/main-page-header.component';
import { ProductsComponent } from './modules/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    TableProductsComponent,
    ModalProductFormComponent,
    MainPageHeaderComponent,
    ProductsComponent
  ],
  imports: [
  BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [NgbActiveModal],
  entryComponents: [ModalProductFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
