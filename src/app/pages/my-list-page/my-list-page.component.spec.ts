import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListPageComponent } from './my-list-page.component';

describe('MyListPageComponent', () => {
  let component: MyListPageComponent;
  let fixture: ComponentFixture<MyListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
