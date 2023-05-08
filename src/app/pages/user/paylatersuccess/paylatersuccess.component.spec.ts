import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaylatersuccessComponent } from './paylatersuccess.component';

describe('PaylatersuccessComponent', () => {
  let component: PaylatersuccessComponent;
  let fixture: ComponentFixture<PaylatersuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaylatersuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaylatersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
