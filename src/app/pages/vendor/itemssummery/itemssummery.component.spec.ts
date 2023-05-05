import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemssummeryComponent } from './itemssummery.component';

describe('ItemssummeryComponent', () => {
  let component: ItemssummeryComponent;
  let fixture: ComponentFixture<ItemssummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemssummeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemssummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
