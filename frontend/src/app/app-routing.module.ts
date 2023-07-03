import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
<<<<<<< HEAD
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
=======
>>>>>>> e6b3eccaccf036ccdf4ab844d548618f4022bf17

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path: 'tag/:tag', component:HomeComponent},
  {path:'food/:id',component:FoodPageComponent},
<<<<<<< HEAD
  {path: 'cart-page', component: CartPageComponent},
  {path: 'login', component: LoginPageComponent}
=======
  {path: 'cart-page', component: CartPageComponent}
>>>>>>> e6b3eccaccf036ccdf4ab844d548618f4022bf17
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
