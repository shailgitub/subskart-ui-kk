import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestnextComponent } from './testnext.component';

describe('TestnextComponent', () => {
  let component: TestnextComponent;
  let fixture: ComponentFixture<TestnextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestnextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestnextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
