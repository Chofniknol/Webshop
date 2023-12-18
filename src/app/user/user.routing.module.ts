import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from '../guards/auth-user/user.guard';
import { CartComponent } from './components/cart/cart.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'dashboard', component: UserDashboardComponent, canActivate: [UserGuard] },
  { path: 'profile', component: UserProfileComponent, canActivate: [UserGuard] },
  { path: 'cart', component: CartComponent, canActivate: [UserGuard] },
  { path: 'my-orders', component: MyOrdersComponent, canActivate: [UserGuard] },
  { path: 'place-order', component: PlaceOrderComponent, canActivate: [UserGuard] },
  { path: 'products/:categoryId', component: ProductsByCategoryComponent, canActivate: [UserGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
