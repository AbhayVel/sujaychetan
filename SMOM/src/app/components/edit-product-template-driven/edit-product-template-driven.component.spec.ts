import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductTemplateDrivenComponent } from './edit-product-template-driven.component';

describe('EditProductTemplateDrivenComponent', () => {
  let component: EditProductTemplateDrivenComponent;
  let fixture: ComponentFixture<EditProductTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductTemplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
