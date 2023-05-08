import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
 // @Input() food1:food;
  constructor(private router: Router, private auth: AuthService) { }
  title = 'toolsets';
  parentSelector: boolean = false;
  name:any;
  food = [
    { id: 1, select: false, name: 'dumpling' },
    { id: 2, select: true, name: 'burger' },
    { id: 3, select: true, name: 'sandwich' },
  ];
  onNext(){
    //this.router.navigateByUrl('testnext',this.food);
    //this.router.navigate(['/testnext'], {queryParams:{data:this.food} });
    this.router.navigateByUrl('/testnext', { state: { data:this.food } });
  }
  onChangeFood($event) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    //console.log(id, isChecked);
    

    this.food = this.food.map((d) => {
      if (d.id == id) {
        d.select = isChecked;
        this.parentSelector = false;
        return d;
      }
      // if (id == -1) {
      //   d.select = this.parentSelector;
      //   return d;
      // }
       return d;
    });
    console.log(this.food);
  }
}

