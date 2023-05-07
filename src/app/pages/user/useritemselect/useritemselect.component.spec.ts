import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseritemselectComponent } from './useritemselect.component';

describe('UseritemselectComponent', () => {
  let component: UseritemselectComponent;
  let fixture: ComponentFixture<UseritemselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseritemselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseritemselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
