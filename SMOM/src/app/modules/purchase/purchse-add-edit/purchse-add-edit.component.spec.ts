import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchseAddEditComponent } from './purchse-add-edit.component';

describe('PurchseAddEditComponent', () => {
  let component: PurchseAddEditComponent;
  let fixture: ComponentFixture<PurchseAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchseAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchseAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
