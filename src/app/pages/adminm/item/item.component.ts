import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
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