import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {RouterModule, Routes} from "@angular/router";
import {HasRole} from "../auth/has-role.guard";

const routes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [HasRole], data: {roles: ['ROLE_ADMIN']}},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
