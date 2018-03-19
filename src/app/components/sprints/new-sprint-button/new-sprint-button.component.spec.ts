import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSprintButtonComponent } from './new-sprint-button.component';

describe('NewSprintButtonComponent', () => {
  let component: NewSprintButtonComponent;
  let fixture: ComponentFixture<NewSprintButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSprintButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSprintButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
