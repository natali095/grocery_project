import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
=======

>>>>>>> e6b3eccaccf036ccdf4ab844d548618f4022bf17
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/particular/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { StarRatingComponent } from '.././app/components/particular/star-raiting/star-raiting.component';
import { SearchComponent } from './components/particular/search/search.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { TagsComponent } from './components/particular/tags/tags.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/particular/title/title.component';
import { NotFoundComponent } from './components/particular/not-found/not-found.component';
<<<<<<< HEAD
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
=======

>>>>>>> e6b3eccaccf036ccdf4ab844d548618f4022bf17



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StarRatingComponent,
    SearchComponent,
    FoodPageComponent,
    TagsComponent,
    CartPageComponent,
    TitleComponent,
<<<<<<< HEAD
    NotFoundComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
=======
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> e6b3eccaccf036ccdf4ab844d548618f4022bf17
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
