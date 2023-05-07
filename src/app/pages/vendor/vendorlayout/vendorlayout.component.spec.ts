import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorlayoutComponent } from './vendorlayout.component';

describe('VendorlayoutComponent', () => {
  let component: VendorlayoutComponent;
  let fixture: ComponentFixture<VendorlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
