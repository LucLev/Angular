import { Routes } from '@angular/router';


import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'movies', component: MoviesComponent },
];


export { routes };