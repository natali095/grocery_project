import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { Observable } from 'rxjs/internal/Observable';
=======
>>>>>>> e6b3eccaccf036ccdf4ab844d548618f4022bf17
// import { StarRatingComponent } from 'src/app/components/particular/star-raiting/star-raiting.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
<<<<<<< HEAD
    let foodsObservable:Observable<Food[]>
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) 
      foodsObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
       else if (params.tag) 
       foodsObservable = this.foodService.getAllFoodsByTag(params.tag);
       else 
       foodsObservable = this.foodService.getAll();

       foodsObservable.subscribe((serverFoods) =>
       this.foods = serverFoods)
=======
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) 
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
       else if (params.tag) 
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
       else 
        this.foods = this.foodService.getAll();
>>>>>>> e6b3eccaccf036ccdf4ab844d548618f4022bf17
      
    });
  }
}
