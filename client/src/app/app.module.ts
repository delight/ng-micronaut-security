import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from "./index/index.component";
import { LoginModule } from "./login/login.module";
import { RouterModule, Routes } from "@angular/router";
import { WebStorageModule } from "ngx-store";
import { httpInterceptorProviders } from "./http/http-interceptors";
import { AdminModule } from "./admin/admin.module";
import { DashboardModule } from "./dashboard/dashboard.module";

const routes: Routes = [
  {path: '', component: IndexComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    WebStorageModule,
    LoginModule,
    AdminModule,
    DashboardModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
