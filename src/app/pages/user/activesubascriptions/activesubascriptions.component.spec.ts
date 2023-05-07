import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivesubascriptionsComponent } from './activesubascriptions.component';

describe('ActivesubascriptionsComponent', () => {
  let component: ActivesubascriptionsComponent;
  let fixture: ComponentFixture<ActivesubascriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivesubascriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivesubascriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
