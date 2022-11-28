import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  name:string = 'Natalia';
  age:number = 22;
  isWorking:boolean = true;
  hobbies = ['Volleyball', 'Music', 'English'];
  class = {
    name: 'English',
    grade: 8,
    teacher: 'Larine'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
