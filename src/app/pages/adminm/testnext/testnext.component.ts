import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-testnext',
  templateUrl: './testnext.component.html',
  styleUrls: ['./testnext.component.scss']
})
export class TestnextComponent implements OnInit{
  food: any;
  constructor(private router: ActivatedRoute) { }
  ngOnInit(): void {
   
    
  }
}
    
 


