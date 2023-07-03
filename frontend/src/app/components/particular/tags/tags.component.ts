import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(foodService:FoodService) {
<<<<<<< HEAD
   foodService.getAllTags().subscribe(serverTags => {
    this.tags = serverTags;
   });
=======
    this.tags = foodService.getAllTags();
>>>>>>> e6b3eccaccf036ccdf4ab844d548618f4022bf17
  }

  


}
