import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStorageService } from './user-storage.service';

describe('StorageComponent', () => {
  let component: UserStorageService;
  let fixture: ComponentFixture<UserStorageService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStorageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStorageService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
