import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from "./auth.service";
import { HttpClientModule } from "@angular/common/http";
import { Authenticated } from "./authenticated.guard";
import { HasRole } from "./has-role.guard";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    HasRole,
    Authenticated
  ]
})
export class AuthModule { }
