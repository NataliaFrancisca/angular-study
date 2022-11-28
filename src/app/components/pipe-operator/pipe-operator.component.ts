import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-operator',
  templateUrl: './pipe-operator.component.html',
  styleUrls: ['./pipe-operator.component.css']
})
export class PipeOperatorComponent implements OnInit {
  someText = `Testando o pipe operator`;
  today = new Date();
  myBirthday = new Date("9 january 2000");
  constructor() { }

  ngOnInit(): void {
    console.log(this.myBirthday);
  }

}
