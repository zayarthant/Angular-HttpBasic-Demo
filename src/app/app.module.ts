import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { HomeComponent } from './view/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import { UserListComponent } from './view/user-list/user-list.component';
import { StaffComponent } from './view/staff/staff.component';
import { MasterComponent } from './view/master/master.component';
import {BasicAuthService} from './service/basic-auth.service';
import {AuthGuardService} from './service/auth-guard.service';

const routes: Route[] = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'home', component : HomeComponent},
  {path: 'staff', component : StaffComponent, canActivate: [AuthGuardService]},
  {path: 'manager', component : MasterComponent,  canActivate: [AuthGuardService]},
  {path: 'userList', component : UserListComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserListComponent,
    StaffComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BasicAuthService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
