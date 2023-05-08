import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { Category } from 'src/app/models/category';
import { ItemPlanVenderForm } from 'src/app/models/item-plan-vender-form';
import { ApiService } from 'src/app/services/api.service';
import { CategoryService } from 'src/app/services/category-service.service';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent {
  item: Item = {
    itemId: 0,
    itemName: '',
    pricePerUnit: 0,
    discount: 0,

    category: { categoryId: 0, categoryName: '' }
  };
  category: Category = {
    categoryId: 0,
    categoryName: '',

  };
  // item!:Item;
  temp = new Item();
  submitted = false;

  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {
  }
  //new code
  newItem(): void {
    this.submitted = false;
    this.category = {
      categoryId: 0,
      categoryName: '',
      //published: false
    };
    this.item = {
      // this.category.categoryName: '',
      itemId: 0,
      itemName: '',
      pricePerUnit: 0,
      discount: 0,
      // dicountedPrice:0,
      category: { categoryId: 0, categoryName: '' }
    };
  }
  onOptionsSelected(value: string) {
    if (value != null) {
      this.temp = new Item({ pricePerUnit: parseInt(value) });
      this.item = this.temp;
      //this.itemPlanVenderForm.item=this.item;

      console.log("the selected value is " + value);
    }

    // saveItem(): void {
    //   const data = {
    //    itemId: this.item.itemId,
    //    itemName: this.item.itemName
    //   };
    //   this.categoryService.createCategory(data)
    //   .subscribe({
    //     next: (result) => {
    //       console.log(result);
    //       this.submitted = true;
    //     },
    //     error: (e) => console.error(e)
    //   });

  }

  saveItem() {

  }

  gotoList() {
    this.router.navigate(['/categorys']);
  }
}


