import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import the Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';

  constructor(private router: Router) { }  // Inject the Router

  logout(): void {
    // Clear session storage
    sessionStorage.clear();

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
