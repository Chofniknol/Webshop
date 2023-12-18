import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AdminService } from '../../admin-services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any
  size: NzButtonSize = 'large';
  validateForm!: FormGroup;
  isSpinning: boolean = false;  //todo changed to false due to new syntax

  constructor(private adminService: AdminService,
              private fb: FormBuilder,
              private notification: NzNotificationService) { }
  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    this.getAllUsers();
  }

  getAllUsers() {
    this.adminService.getAllUsers().subscribe((res) => {
      this.users = res.data;
      console.log(res);
    })
  }

  deleteUser(userId: any) {
    this.isSpinning = true;
    this.adminService.deleteUserById(userId).subscribe((res) => {
      console.log(res);
      this.isSpinning = false;
      if (res.status == "OK") {
        this.getAllUsers();
        this.notification
          .success(
            'SUCCESS',
            `User Deleted successfully!`,
            { nzDuration: 5000 }
          );

      } else {
        this.notification
          .error(
            'ERROR',
            `${res.message}`,
            { nzDuration: 5000 }
          )
      }
    }, error => {
      console.log("errorr", error);
      if (error.status == 406) {
        this.notification
          .error(
            'ERROR',
            `${error.error}`,
            { nzDuration: 5000 }
          )
      }
      this.isSpinning = false;
    })

  }


}

