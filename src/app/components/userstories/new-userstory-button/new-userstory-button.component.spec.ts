import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserstoryButtonComponent } from './new-userstory-button.component';

describe('NewUserstoryButtonComponent', () => {
  let component: NewUserstoryButtonComponent;
  let fixture: ComponentFixture<NewUserstoryButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserstoryButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserstoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
