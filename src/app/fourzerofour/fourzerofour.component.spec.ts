import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourzerofourComponent } from './fourzerofour.component';

describe('FourzerofourComponent', () => {
  let component: FourzerofourComponent;
  let fixture: ComponentFixture<FourzerofourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourzerofourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourzerofourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
