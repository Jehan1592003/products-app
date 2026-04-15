import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { Product } from './components/product/product';

export const routes: Routes = [
      { path: '', component: ProductList },
      { path: 'product/:id', component: Product }
];
