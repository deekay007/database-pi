import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifetimeMembersComponent } from './lifetime-members.component';

describe('LifetimeMembersComponent', () => {
  let component: LifetimeMembersComponent;
  let fixture: ComponentFixture<LifetimeMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifetimeMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifetimeMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
