import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReactiveFOrmComponent } from './edit-reactive-form.component';

describe('EditReactiveFOrmComponent', () => {
  let component: EditReactiveFOrmComponent;
  let fixture: ComponentFixture<EditReactiveFOrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReactiveFOrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReactiveFOrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
