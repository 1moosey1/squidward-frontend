import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoryModalComponent } from './userstory-modal.component';

describe('UserstoryModalComponent', () => {
  let component: UserstoryModalComponent;
  let fixture: ComponentFixture<UserstoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
