import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './modules/pankake-generic/components/main-page/main-page.component';
import { MenuComponent } from './modules/pankake-generic/components/menu/menu.component';
import { AboutUsComponent } from './modules/pankake-generic/components/about-us/about-us.component';
import { ContactComponent } from './modules/pankake-generic/components/contact/contact.component';
import { DishComponent } from './modules/admin-panel/components/dish/dish.component';
import { IngredientsComponent } from './modules/admin-panel/components/ingredients/ingredients.component';
import { DishIngridientComponent } from './modules/admin-panel/components/dish-ingridient/dish-ingridient.component';
import { RegistrationComponent } from './modules/admin-panel/components/registration/registration.component';
import { LoginComponent } from './modules/admin-panel/components/login/login.component';
import { AdminMainPageComponent } from './modules/admin-panel/components/admin-main-page/admin-main-page.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:MainPageComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutUsComponent},
  {path:'contact',component:ContactComponent},
  {path:'dish',component:DishComponent},
  {path:'ingredients',component:IngredientsComponent},
  {path:'dish-ingridient',component:DishIngridientComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'admin-main-page',component:AdminMainPageComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
