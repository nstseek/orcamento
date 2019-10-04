import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryOrPaymentMethodComponent } from './add-category-or-payment-method.component';

describe('AddCategoryOrPaymentMethodComponent', () => {
  let component: AddCategoryOrPaymentMethodComponent;
  let fixture: ComponentFixture<AddCategoryOrPaymentMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryOrPaymentMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryOrPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
