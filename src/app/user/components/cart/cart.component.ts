import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserService } from '../../user-services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  CartProducts: any = [];
  totalAmount: any;
  quantity :any;
  validateForm!: FormGroup;
  isSpinning = false;
  size: NzButtonSize = 'large';


  constructor(private userService: UserService,
              private notification: NzNotificationService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCart();
    this.validateForm = this.fb.group({
    });
  }

  getCart() {
    this.isSpinning = true;
    this.userService.getCartByUserId().subscribe((res) => {
      this.CartProducts = res.data.cartItems;
      this.totalAmount = res.data.amount;
      this.quantity = res.data.cartItems.quantity;
      console.log(res);
    });
  }

  minusProduct(productId: any) {
    this.isSpinning = true;
    this.userService.addMinusOnProduct(productId).subscribe((res) => {
      console.log(res);
      if (res.status == "OK") {
        this.notification
          .success(
            'SUCCESS',
            `Decreased`,
            { nzDuration: 5000 }
          );
        this.getCart();
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


  plusProduct(productId: any) {
    this.isSpinning = true;
    this.userService.addPlusOnProduct(productId).subscribe((res) => {
      console.log(res);
      if (res.status == "OK") {
        this.notification
          .success(
            'SUCCESS',
            `Incresed`,
            { nzDuration: 5000 }
          );
        this.getCart();
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

