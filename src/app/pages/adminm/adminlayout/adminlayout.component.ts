import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.scss']
})
export class AdminlayoutComponent {
  constructor(private auth: AuthService, private router: Router) {

  }

  goToHome() {
    this.router.navigate(['home'])
  }
  logout() {
    this.auth.logout();
  }

}
