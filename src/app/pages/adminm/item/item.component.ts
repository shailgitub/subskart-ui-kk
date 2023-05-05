import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ItemPlanVenderForm } from '../../../models/item-plan-vender-form';
import { Plan } from '../../../models/plan';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  items!: Item[];

  constructor(private api: ApiService, private router: Router){ 
    this.api.getCategories().subscribe((data: any) => {
      this.items=data;
        console.log(this.items);
      });
  }

  goToAddItem(){
      this.router.navigate(['additem']);
    }
  
  testClick(){}
 
  // reloadData() {
  //   this.categories = this.api.getCategories1();
  // }
  


}