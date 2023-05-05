import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent {
// implements OnInit {
  //venders!: Vender[];
  //category!:Category;
  //category: Category = new Category();
  category: Category = {
    categoryId: 0,
    categoryName: '',
    //published: false
  };
  submitted = false;

  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {
  }
//new code
  newCategory(): void {
    this.submitted = false;
      this.category = {
      categoryId: 0,
      categoryName: '',
      //published: false
    };
  }

  saveCategory(): void {
    const data = {
      categoryId: this.category.categoryId,
      categoryName: this.category.categoryName
    };
    this.categoryService.createCategory(data)
    .subscribe({
      next: (result) => {
        console.log(result);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
}

// newCategory(): void {
//   this.submitted = false;
//   this.category = {
//     categoryId: 0,
//     categoryName: '',
//     //published: false
//   };
// }
//old code angular-8
  // save() {
  //   this.categoryService
  //   .createCategory(this.category).subscribe(data => {
  //     console.log(data)
  //     this.category = new Category();
  //     this.gotoList();
  //   }, 
  //   error => console.log(error));
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   this.save();    
  // }

  gotoList() {
    this.router.navigate(['/categorys']);
  }
}