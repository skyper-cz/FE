import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'uzivatele', component: UserComponent},
  {path: 'Registrace', component: RegistrationComponent},
  {path: 'Login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
