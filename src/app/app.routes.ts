
import { Routes } from '@angular/router';
import { Product } from './features/products/component/product/product';
import { About } from './static/component/about/about';
import { ActiveForms } from './features/forms/component/active-form/active-form';
import { TemplateForm } from './features/forms/component/template-form/template-form';
import { Home } from './shared/component/home/home';
import { ProductList } from './features/products/component/product-list/product-list/product-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product-list', component: ProductList },
  { path: 'active-forms', component: ActiveForms },
  { path: 'template-form', component: TemplateForm },
  { path: 'product/:id', component: Product },
  { path: 'about', loadComponent: () => import('./static/component/about/about').then(m => m.About) },
  { path: '**', redirectTo: '' }
];
