import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  { path: 'product-add', component:ProductAddComponent  },
  { path: 'product-manager', component:ProductManagerComponent  },
  { path: 'product-list', component:ListProductComponent  },
  { path: 'product-manager/:id', component:ProductDetailComponent  },
  { path: 'product-manager/edit/:id', component:ProductUpdateComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
