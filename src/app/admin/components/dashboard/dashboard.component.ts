import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AdminService } from '../../admin-services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: any = [];
  validateForm!: FormGroup;
  blogs: any;
  searchBlogByTitle: any;
  isSpinning = false;
  size: NzButtonSize = 'large';

  constructor(private adminService: AdminService,
              private notification: NzNotificationService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
    });
    this.getAllProducts();
  }

  submitForm() {
    this.isSpinning = true;
    this.products = [];
    this.adminService.getProductsByTitle(this.validateForm.get(['title'])!.value).subscribe((res) => {
      res.data.forEach((element: { processedImg: string; returnedImg: string; }) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.products.push(element);
        this.isSpinning = false;
      });
      // this.cars=res.data
      console.log(res);
    });
  }

  getAllProducts() {
    this.isSpinning = true;
    this.products = [];
    this.adminService.getAllProducts().subscribe((res) => {
      res.data.forEach((element: { processedImg: string; returnedImg: string; }) => { //todo was just element syntax change fix
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.products.push(element);
        this.isSpinning = false;
      });
      // this.cars=res.data
      console.log(res);
    });
  }



  deleteProduct(productId: any) {
    this.adminService.deleteProductById(productId).subscribe((res) => {
      if (res.status == "OK") {
        this.notification
          .success(
            'SUCCESS',
            `Product Deleted Successfully!!!`,
            { nzDuration: 5000 }
          );
        this.getAllProducts();
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

