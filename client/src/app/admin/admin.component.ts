import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data: string;

  constructor(private authService: AuthService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/admin', {responseType: 'text'}).subscribe(text => {
      this.data = text;
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
