import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  isVisible:boolean = true;

  user: User = {
    name: 'sauce',
    firstName: 'six',
    age: 8,
    quote: 'ataaa',
    photo: 'http://dianantes.free.fr/images/animal-saucisse.gif',
  }

  constructor() { }

  ngOnInit() {
  }

}



