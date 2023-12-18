import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAuthGuard } from './no-auth.guard';

describe('NoAuthComponent', () => {
  let component: NoAuthGuard;
  let fixture: ComponentFixture<NoAuthGuard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoAuthGuard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoAuthGuard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
