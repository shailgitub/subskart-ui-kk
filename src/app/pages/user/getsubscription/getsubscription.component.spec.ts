import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsubscriptionComponent } from './getsubscription.component';

describe('GetsubscriptionComponent', () => {
  let component: GetsubscriptionComponent;
  let fixture: ComponentFixture<GetsubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetsubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
