import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemselectionComponent } from './itemselection.component';

describe('ItemselectionComponent', () => {
  let component: ItemselectionComponent;
  let fixture: ComponentFixture<ItemselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemselectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
