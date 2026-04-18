import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { Product } from './components/product/product';
import { About } from './components/about/about';

export const routes: Routes = [
      { path: '', component: ProductList},
      //هاد بس مع المسارات الفارغة
      { path: 'product/:id', component: Product },
      { path: 'about', loadComponent: () => import('./components/about/about').then(m => m.About)}
      
];
