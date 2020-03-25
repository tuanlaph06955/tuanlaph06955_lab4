import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FormsModule } from '@angular/forms';
import { Product } from "./Product";
import { data } from './MockProduct';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    BannerComponent,
    ProductComponent,
    CategoryComponent,
    FooterComponent,
    ListProductComponent,
    ProductManagerComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
