import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
food!: Food;
constructor(activatedRoute:ActivatedRoute, foodService:FoodService, 
  private cartService:CartService, private router: Router){
  activatedRoute.params.subscribe((params) => {
    if(params.id)
<<<<<<< HEAD
    foodService.getFoodById(params.id).subscribe(serverFood => {
      this.food = serverFood;
    });
=======
    this.food = foodService.getFoodById(params.id);
>>>>>>> e6b3eccaccf036ccdf4ab844d548618f4022bf17
  })
}

addToCart(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page');
}


}
