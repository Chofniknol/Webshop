import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserService } from '../../user-services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  categories: any = [];
  validateForm!: FormGroup;
  isSpinning = false;
  size: NzButtonSize = 'large';

  constructor(private userService: UserService,
              private notification: NzNotificationService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
    });
    this.getAllCategories();
  }

  submitForm() {
    this.isSpinning = true;
    this.userService.getCategoriesByTitle(this.validateForm.get(['title'])!.value).subscribe((res) => {
      this.categories = res.data
      console.log(res);
    });
  }

  getAllCategories() {
    this.isSpinning = true;
    this.userService.getAllCategories().subscribe((res) => {
      this.categories = res.data
      console.log(res);
    });
  }

  addToCart(productId: any) {
    this.userService.addToCart(productId).subscribe((res) => {
      if (res.status == "CREATED") {
        this.notification
          .success(
            'SUCCESS',
            `Product Added to Cart Successfully!`,
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
    });
  }

}
