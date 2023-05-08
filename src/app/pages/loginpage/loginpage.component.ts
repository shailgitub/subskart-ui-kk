import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {

  loginObj: any = {
    usernameOrEmail: '',
    password: ''
  };
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }
  onLogin() {
    this.auth.generateToken(this.loginObj).subscribe(
      (response: any) => {
        let userName = response.username;
        let role=response.roles[0].name;
        let password=response.roles[0].name;
        if (role=='user') {
          localStorage.setItem('role', role);
          this.router.navigateByUrl('userdashboard');
        } else if (role=='admin') {
          localStorage.setItem('role',role);
          this.router.navigateByUrl('category');
        } else if (role=='vender') {
          localStorage.setItem('role', role);
          this.router.navigateByUrl('itemselection');
        }
      }, error => {
        console.log(error);
      });

    console.log();
    // if (this.loginObj.userName == 'user123' && this.loginObj.password == 'user@123') {
    //   localStorage.setItem('role', 'user');
    //   this.router.navigateByUrl('userdashboard');
    // } else if (this.loginObj.userName == 'admin' && this.loginObj.password == 'admin@123') {
    //   localStorage.setItem('role', 'admin');
    //   this.router.navigateByUrl('category');
    // } else if (this.loginObj.userName == 'vendor' && this.loginObj.password == 'vendor@123') {
    //   localStorage.setItem('role', 'vendor');
    //   this.router.navigateByUrl('itemselection');
    // }
  }

}
