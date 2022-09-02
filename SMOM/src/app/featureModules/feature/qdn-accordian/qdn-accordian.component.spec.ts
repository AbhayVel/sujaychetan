import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QdnAccordianComponent } from './qdn-accordian.component';

describe('QdnAccordianComponent', () => {
  let component: QdnAccordianComponent;
  let fixture: ComponentFixture<QdnAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QdnAccordianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QdnAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
