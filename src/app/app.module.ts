import { BrowserModule } from '@angular/platform-browser';
import { NgModule, HostBinding } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { OrdersComponent } from './account/orders/orders.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatBadgeModule
} from '@angular/material';
import { NgxSkltnModule, SkltnConfig } from 'ngx-skltn';
const skltnConfig: SkltnConfig = {
  rectRadius: 10,
  flareWidth: '150px',
  bgFill: '#e6e6e6',
  flareFill: 'rgba(255,255,255, 0.5)',
};
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { MdePopoverModule } from '@material-extended/mde';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DelayInterceptor } from './services/delay-interceptor.service';
import { AddMealComponent } from './add-meal/add-meal.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ChangeThemeComponent } from './shared/change-theme/change-theme.component';
import { AgmCoreModule } from '@agm/core';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CategoryFilterPipe } from './core/category-filter.pipe';
import { TypeFilterPipe } from './core/type-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BlogsComponent,
    CheckoutComponent,
    MyAccountComponent,
    OrdersComponent,
    AddMealComponent,
    ChangeThemeComponent,
    ContactUsComponent,
    CategoryFilterPipe,
    TypeFilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatBadgeModule,
    MdePopoverModule,
    NgxSkltnModule.forRoot(skltnConfig),
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPageScrollCoreModule.forRoot({duration: 1500}),
    NgxPageScrollModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: DelayInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddMealComponent]
})
export class AppModule { 

}
