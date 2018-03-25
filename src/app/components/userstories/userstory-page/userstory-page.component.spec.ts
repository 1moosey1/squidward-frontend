import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoryPageComponent } from './userstory-page.component';

describe('UserstoryPageComponent', () => {
  let component: UserstoryPageComponent;
  let fixture: ComponentFixture<UserstoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
