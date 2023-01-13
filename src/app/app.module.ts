import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { IdeasComponent } from './view/ideas/ideas.component';
import { FindProfessionalsComponent } from './view/find-professionals/find-professionals.component';
import { ShopProductsComponent } from './view/shop-products/shop-products.component';
import { CategoryScreenComponent } from './view/category-screen/category-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdeasComponent,
    FindProfessionalsComponent,
    ShopProductsComponent,
    CategoryScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
