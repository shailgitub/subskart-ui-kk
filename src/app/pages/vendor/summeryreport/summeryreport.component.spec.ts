import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeryreportComponent } from './summeryreport.component';

describe('SummeryreportComponent', () => {
  let component: SummeryreportComponent;
  let fixture: ComponentFixture<SummeryreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummeryreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummeryreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
