import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './modules/products/products.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { SuppliersComponent } from './modules/suppliers/suppliers.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'suppliers', component: SuppliersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
