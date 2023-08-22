import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any = {
    username: '',
    birthdate: '',
    age: null
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedUser = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}');
    if (!storedUser || !storedUser.username) {
      this.router.navigate(['/login']);
    } else {
      this.user = storedUser;
    }
  }
}
