import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: User = new User();

  onSubmit(){
    console.log(this.model)
  }
  constructor() { }

  ngOnInit() {
  }

}
