import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecteditemsforpay',
  templateUrl: './selecteditemsforpay.component.html',
  styleUrls: ['./selecteditemsforpay.component.scss']
})
export class SelecteditemsforpayComponent {
  constructor(private router: Router) { }
  payNowOnClick() {
    this.router.navigateByUrl('paynowoption');
  }
  payLayterOnClick() { this.router.navigateByUrl('paylatersuccess'); }

}
