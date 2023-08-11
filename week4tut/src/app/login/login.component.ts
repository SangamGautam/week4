import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importing Router for navigation

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null; // For showing error messages

  users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' }
  ];

  constructor(private router: Router) { }  // Injecting Router service

  ngOnInit(): void {
  }

  // Method to handle form submission
  onSubmit(form: any): void {
    this.login();  // We'll define the logic in the login method
  }

  login(): void {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      // If a matching user is found, navigate to the account page.
      this.router.navigate(['/account']);
    } else {
      // If no matching user is found, show an error message.
      this.errorMessage = 'Invalid email or password';
    }
  }
}
