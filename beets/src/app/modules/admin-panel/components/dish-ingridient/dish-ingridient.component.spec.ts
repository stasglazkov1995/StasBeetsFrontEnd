import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishIngridientComponent } from './dish-ingridient.component';

describe('DishIngridientComponent', () => {
  let component: DishIngridientComponent;
  let fixture: ComponentFixture<DishIngridientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishIngridientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishIngridientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
