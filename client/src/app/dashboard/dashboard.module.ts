import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {HasRole} from "../auth/has-role.guard";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [HasRole], data: {roles: ['ROLE_USER']}},
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
