import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users = [
    {
      id: 0,
      name: 'Nat',
      email: 'nath@mail.com',
      role: 'developer'
    },

    {
      id: 1,
      name: 'Natasha',
      email: 'nathasa@avenger.com',
      role: 'heroe'
    }
  ]

  // userName = 'Joaquim';
  // user = {
  //   email: 'joaquim@mail.com',
  //   role: 'admin'
  // };
  
  images = ["../assets/images/eua.png", "../assets/images/japan-fem.png"];

  title = 'hello-world-angular';
}
