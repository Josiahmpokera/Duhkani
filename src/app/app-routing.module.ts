import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {IdeasComponent} from "./view/ideas/ideas.component";
import {FindProfessionalsComponent} from "./view/find-professionals/find-professionals.component";
import {ShopProductsComponent} from "./view/shop-products/shop-products.component";
import {CategoryScreenComponent} from "./view/category-screen/category-screen.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Duhkani - Home',
    pathMatch: 'full'
  },



//  Ideas Screen Route
  {
    path: 'ideas',
    component: IdeasComponent
  },

//  FInd Professionals
  {
    path: 'professionals',
    component: FindProfessionalsComponent
  },

//  Shop Products Route
  {
    path: 'products',
    component: ShopProductsComponent
  },

//  Category Selected Screen
  {
    path: 'category-screen',
    component: CategoryScreenComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
