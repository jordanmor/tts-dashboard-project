import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableProductsComponent } from './modules/table-products/table-products.component';


const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', component: TableProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
