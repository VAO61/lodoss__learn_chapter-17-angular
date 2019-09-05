import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultListControlComponent } from './result-list-control.component';

describe('ResultListControlComponent', () => {
  let component: ResultListControlComponent;
  let fixture: ComponentFixture<ResultListControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultListControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
