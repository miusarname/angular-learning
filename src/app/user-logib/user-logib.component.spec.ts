import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogibComponent } from './user-logib.component';

describe('UserLogibComponent', () => {
  let component: UserLogibComponent;
  let fixture: ComponentFixture<UserLogibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLogibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserLogibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
