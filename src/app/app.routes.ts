import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { Product } from './components/product/product';
import { About } from './components/about/about';
import { ActiveForms } from './forms/active-forms/active-forms';
import { Home } from './components/home/home';
import { TemplateForm } from './forms/template-form/template-form';

export const routes: Routes = [
       { path: '', component: Home, },
      { path: 'product-list', component: ProductList},
       { path: 'active-forms', component: ActiveForms},
       { path: 'template-form', component: TemplateForm},
      { path: 'product/:id', component: Product },
      { path: 'about', loadComponent: () => import('./components/about/about').then(m => m.About)},
      { path: '**', redirectTo: '' }

      
];
