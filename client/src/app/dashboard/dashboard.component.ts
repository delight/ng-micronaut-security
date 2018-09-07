import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: string;

  constructor(private authService: AuthService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/dashboard', {responseType: 'text'}).subscribe(text => {
      this.data = text;
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
