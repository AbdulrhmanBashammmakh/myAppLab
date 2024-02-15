import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
  path: 'product', children:[{ path: '', data: {title: 'product'},
    loadChildren: () =>
      import('./ptoduct/ptoduct.module').then((m) => m.PtoductModule)}]
},
  {
    path:'', component:HomeComponent
  }
];
