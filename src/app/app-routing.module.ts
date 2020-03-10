import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { OrdersComponent } from './account/orders/orders.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'review', component: BlogsComponent
  },
  {
    path: 'contactus', component: ContactUsComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'my-account', component: MyAccountComponent,
    children: [
     
      {
        path: 'orders', component: OrdersComponent
      },
      {
        path: '', redirectTo: 'orders', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'orders', pathMatch: 'full'
      }
    ]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
