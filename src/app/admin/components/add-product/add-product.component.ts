import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AdminService } from '../../admin-services/admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  currentFileUpload: any; // todo changed from currentFileUpload: File;
  myFile: any; // todo changed from myFile: FileList;
  avatarUrl: any = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEOb9DSnnU_mwSu5HYXuFuUjktAvKecyMrw&usqp=CAU';
  isSpinning = false;
  listOfCategories: any = [];

  constructor(private fb: FormBuilder,
              private notification: NzNotificationService,
              private router: Router,
              private adminService: AdminService) {

  }

  validateForm!: FormGroup;

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      categoryId: [null, [Validators.required]],
      name: [null, [Validators.required]],
      rating: [null, [Validators.required]],
      availableQuantity: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });
    this.getAllCategories();
  }

  getAllCategories() {
    this.adminService.getAllCategories().subscribe((res) => {
      this.listOfCategories = res.data;
      console.log(this.listOfCategories);
    })
  }


  submitForm(): void {
    console.log(this.validateForm.valid);
    console.log(this.validateForm);
    if (this.validateForm.valid) {
      console.log("In function");
      this.isSpinning = true;
      const formData: FormData = new FormData();
      formData.append('img', this.currentFileUpload);
      formData.append('categoryId', this.validateForm.get('categoryId')!.value); //todo fixed error by adding !
      formData.append('name', this.validateForm.get('name')!.value); //todo fixed error by adding !
      formData.append('rating', this.validateForm.get('rating')!.value); //todo fixed error by adding !
      formData.append('availableQuantity', this.validateForm.get('availableQuantity')!.value); //todo fixed error by adding !
      formData.append('description', this.validateForm.get('description')!.value); //todo fixed error by adding !
      formData.append('price', this.validateForm.get('price')!.value); //todo fixed error by adding !
      console.log(formData);
      this.adminService.addProduct(formData).subscribe((res) => {
        this.isSpinning = false;
        if (res.status == "CREATED") {
          this.notification
            .success(
              'SUCCESS',
              `Product Posted Successfully!`,
              { nzDuration: 5000 }
            );
          this.router.navigateByUrl('/admin/dashboard');
        } else {
          this.notification
            .error(
              'ERRORRR',
              `${res.message}`,
              { nzDuration: 5000 }
            )
        }
      });
    } else {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  uploadProfileImage(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    const file = input.files[0];
    this.currentFileUpload = file;
    alert('File is here : ' + this.currentFileUpload);

  }

  public uploadFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.myFile = input.files;

    if (!input.files?.length) {
      return;
    }
    this.currentFileUpload = input.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.currentFileUpload);
    reader.onload = (_event) => {
      this.avatarUrl = reader.result;
    };
  }
}

