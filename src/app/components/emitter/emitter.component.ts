import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  myNumber: number = 0;
  myName: string = "Natalia";

  @Input() changeName: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(){
    console.log("deu certo")
    this.myNumber = Math.floor(Math.random() * 10)
  }

}
