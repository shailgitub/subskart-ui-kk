import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {

  loginObj: any = {
    userName: '',
    password: ''
  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onLogin() {

    if (this.loginObj.userName == 'user123' && this.loginObj.password == 'user@123') {
      localStorage.setItem('role', 'user');
      this.router.navigateByUrl('userdashboard');
    } else if (this.loginObj.userName == 'admin' && this.loginObj.password == 'admin@123') {
      localStorage.setItem('role', 'admin');
      this.router.navigateByUrl('category');
    } else if (this.loginObj.userName == 'vendor' && this.loginObj.password == 'vendor@123') {
      localStorage.setItem('role', 'vendor');
      this.router.navigateByUrl('itemselection');
    }
  }

}
