import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private authService: AuthService, private router: Router) {}
logout(){
  this.authService.logout()
  this.router.navigate(['/login']);
}

}
