import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsdashboardComponent } from './newsdashboard.component';

describe('NewsdashboardComponent', () => {
  let component: NewsdashboardComponent;
  let fixture: ComponentFixture<NewsdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
