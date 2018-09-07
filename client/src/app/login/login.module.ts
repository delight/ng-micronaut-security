import {LoginComponent} from "./login.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "../auth/auth.module";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    AuthModule
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [
    RouterModule
  ]

})
export class LoginModule { }
