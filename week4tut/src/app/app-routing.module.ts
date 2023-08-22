import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';  // Import the ProfileComponent

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent },
  { path: 'profile', component: ProfileComponent },  // Add a route for the ProfileComponent
  // Redirect to home if no path is matched
  { path: '', redirectTo: '/login', pathMatch: 'full' }  // Updated to redirect to the login page as a default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
