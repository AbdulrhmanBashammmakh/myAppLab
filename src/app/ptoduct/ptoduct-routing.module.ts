import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCategoryComponent} from "./product-category/product-category.component";
import {ProductUnitComponent} from "./product-unit/product-unit.component";

const routes: Routes = [
  {
  path:'',
  component:ProductComponent
},
  {
    path:'list',
    component:ProductListComponent
  },
  {
    path:'cate',
    component:ProductCategoryComponent
  },
  {
    path:'unit',
    component:ProductUnitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PtoductRoutingModule { }
