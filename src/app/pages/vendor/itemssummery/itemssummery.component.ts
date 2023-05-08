import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-itemssummery',
  templateUrl: './itemssummery.component.html',
  styleUrls: ['./itemssummery.component.scss']
})
export class ItemssummeryComponent {
  items!: Item[];
  
  public discountPrice: number = 0;

  constructor(private api: ApiService, private router: Router) {
    this.api.getItems().subscribe((data: any) => {
      this.items = data;
      console.log(this.items);
    });
  }

  
  goToAddItem() {
    this.router.navigate(['additem']);
  }

  testClick() { }

  // reloadData() {
  //   this.categories = this.api.getCategories1();
  // }



}