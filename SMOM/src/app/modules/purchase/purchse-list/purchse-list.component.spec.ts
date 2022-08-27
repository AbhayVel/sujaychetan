import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchseListComponent } from './purchse-list.component';

describe('PurchseListComponent', () => {
  let component: PurchseListComponent;
  let fixture: ComponentFixture<PurchseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
