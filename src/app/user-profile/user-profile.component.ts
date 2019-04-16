import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  isVisible:boolean = true;

  /*public user: User = {
    name: 'sauce',
    firstName: 'six',
    mail: 'default@mail.com',
    age: 8,
    quote: 'ataaa',
    photo: 'http://dianantes.free.fr/images/animal-saucisse.gif',
  }*/
  


  constructor() { }

  ngOnInit() {
  }

}



