import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { DemoRoute, RouteConstants } from '../../../config/route.constans';
import { User } from '../../../models/user';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterService } from '../../../core/services/router.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, RouterLink, RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;
  routes: DemoRoute[] = RouteConstants.ROUTES
  currentUser: User = {
    userName: '',
    password: '',
    token: ''
  };
  showHeader: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private authService: AuthService, private router: Router, private routerService: RouterService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.routerService.data
    .subscribe(value => {
      console.log(value.header);
      this.showHeader = value.header !== false;
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
