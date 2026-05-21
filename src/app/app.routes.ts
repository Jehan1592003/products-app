import { Routes } from '@angular/router';
import { Product } from './features/products/component/product/product';
import { About } from './static/component/about/about';
import { ActiveForms } from './features/forms/forms/active-forms/active-forms';
import { TemplateForm } from './features/forms/forms/active-forms/template-form/template-form';
import { ProductList } from './features/product-list/component/component/product-list';
import { Home } from './shared/component/home/home';

export const routes: Routes = [
       { path: '', component: Home, },
      { path: 'product-list', component: ProductList},
       { path: 'active-forms', component: ActiveForms},
       { path: 'template-form', component: TemplateForm},
      { path: 'product/:id', component: Product },
      { path: 'about', loadComponent: () => import('./static/component/about/about').then(m => m.About)},
      { path: '**', redirectTo: '' }

      
];
