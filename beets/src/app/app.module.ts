import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClient , HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppFooterComponent} from './components/app-footer/app-footer.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentDetailComponent } from './modules/pankake-generic/payment-detail-generic/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './modules/pankake-generic/payment-detail-generic/payment-detail-list/payment-detail-list.component';
import { PaymentDetailGenericComponent } from './modules/pankake-generic/payment-detail-generic/payment-detail-generic.component';
import { PaymentDetailService } from './modules/services/payment-detail.service';
import { MainPageComponent } from './modules/pankake-generic/components/main-page/main-page.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { MenuComponent } from './modules/pankake-generic/components/menu/menu.component';
import { ContactComponent } from './modules/pankake-generic/components/contact/contact.component';
import { AboutUsComponent } from './modules/pankake-generic/components/about-us/about-us.component';
import { IngredientsComponent } from './modules/admin-panel/components/ingredients/ingredients.component';
import { DishComponent } from './modules/admin-panel/components/dish/dish.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DishIngridientComponent } from './modules/admin-panel/components/dish-ingridient/dish-ingridient.component';
import { RegistrationComponent } from './modules/admin-panel/components/registration/registration.component';
import { LoginComponent } from './modules/admin-panel/components/login/login.component';
import { UserRegistrationService } from './modules/services/user-registration.service';
import {AuthInterceptor } from './modules/services/auth.interceptor.service';
import { AdminMainPageComponent } from './modules/admin-panel/components/admin-main-page/admin-main-page.component';
import { AuthService } from './modules/services/auth.service';
import { LoginService } from './modules/services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    PaymentDetailGenericComponent,
    MainPageComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppContentComponent,
    MenuComponent,
    ContactComponent,
    AboutUsComponent,
    IngredientsComponent,
    DishComponent,
    SideBarComponent,
    DishIngridientComponent,
    RegistrationComponent,
    LoginComponent,
    AdminMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PaymentDetailService,
    UserRegistrationService,
    AuthService,
    LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
