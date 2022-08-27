import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPComponent } from './data-p.component';

describe('DataPComponent', () => {
  let component: DataPComponent;
  let fixture: ComponentFixture<DataPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
