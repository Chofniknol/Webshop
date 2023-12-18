import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGuard } from './user.guard';

describe('AuthUserComponent', () => {
  let component: UserGuard;
  let fixture: ComponentFixture<UserGuard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGuard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGuard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
