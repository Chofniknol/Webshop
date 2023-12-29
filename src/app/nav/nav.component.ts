import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorageService } from '../services/storage/user-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  isUserLoggedIn : boolean = UserStorageService.isUserLoggedIn();
  isAdminLoggedIn : boolean = UserStorageService.isAdminLoggedIn();

  constructor(private router: Router) {
    //prevent no components showing from router outlet on first load
    this.router.navigateByUrl('login');
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.isUserLoggedIn = UserStorageService.isUserLoggedIn();
        this.isAdminLoggedIn  = UserStorageService.isAdminLoggedIn();
      }
    })
  }

  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }

}
