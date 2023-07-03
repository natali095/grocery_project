import { Component } from '@angular/core';
import { StarRatingComponent } from '../../particular/star-raiting/star-raiting.component';
import { CartService } from 'src/app/services/cart.service';
<<<<<<< HEAD
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';
=======
>>>>>>> e6b3eccaccf036ccdf4ab844d548618f4022bf17

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity=0;
<<<<<<< HEAD
  user!:User;
  constructor(cartService:CartService, private userService:UserService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;

    })
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
=======

  constructor(cartService:CartService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
>>>>>>> e6b3eccaccf036ccdf4ab844d548618f4022bf17
  }
}
