import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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

  onSave() {
    sessionStorage.setItem('loggedInUser', JSON.stringify(this.user));
  }
}
