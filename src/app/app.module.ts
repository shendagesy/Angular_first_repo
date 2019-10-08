import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CouponRegistrationComponent } from './coupon-registration/coupon-registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { DisplayCouponsComponent } from './display-coupons/display-coupons.component';
import { DisplayImageService } from './services/display-image.service';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'CouponRegistration', component: CouponRegistrationComponent },
  { path: 'DisplayCoupons', component: DisplayCouponsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CouponRegistrationComponent,
    PageNotFoundComponent,
    DisplayCouponsComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    DisplayImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// children: [
//   {
//       path: 'active-coupons',
//       component: ActiveCouponsComponent
//   },
//   {
//       path: 'expire-coupons',
//       component: ExpireCouponsComponent
//   }
// ]