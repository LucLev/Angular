import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'movies', component: MoviesComponent },
];


import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MoviesComponent } from './movies/movies.component';
import { HighlightDirective } from './highlight.directive';
import { MenuComponent } from './menu/menu.component';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    MoviesComponent,
    HighlightDirective,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
  ],

  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule {}

