import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    this.login();
  }

  login(): void {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      // Save user email to session storage
      sessionStorage.setItem('loggedInUser', this.email);

      // Navigate to the account page
      this.router.navigate(['/account']);
    } else {
      // If no matching user is found, show an error message
      this.errorMessage = 'Invalid email or password';
    }
  }
}
