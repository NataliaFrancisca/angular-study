import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  childrenName: string = "Natalia";
  myNumber: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    console.log("fui clicado :)")
    this.childrenName = "João";
  }

  onChangeNumber(){
    this.myNumber = this.myNumber * 2;
    console.log("TÁ MUDANDO")
    console.log(this.myNumber);
  }

}
