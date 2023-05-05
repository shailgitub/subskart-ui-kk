
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api.service';
import { CategoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent{
// implements OnInit {
  categories!: Category[];

  constructor(private api: ApiService, private router: Router){ 
    this.api.getCategories().subscribe((data: any) => {
      this.categories=data;
        console.log(this.categories);
      });
  }

  goToAddCategory(){
      this.router.navigate(['addcategory']);
    }
  //category: Category = new Category();
  // submitted = false;
  // category!: Category ;

  // constructor(private categoryService: CategoryService,
  //   private router: Router) { }

  testClick(){}
  // newCategory(): void {
  //   this.submitted = false;
  //   this.category = new Category(categoryId: number, categoryName: string): Category;
  // }
  // ngOnInit() {
  //   this.reloadData();
  // }

  // reloadData() {
  //   this.categories = this.api.getCategories1();
  // }
  // employeeDetails(id: number){
  //   this.router.navigate(['details', id]);
  // }
  // deleteEmployee(id: number) {
  //   this.employeeService.deleteEmployee(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }


}