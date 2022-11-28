import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = false;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void{
    this.show = !this.show;
  }

  increment(): void{
    this.counter = this.counter + 1;
  }

  decrement(): void{
    this.counter = this.counter - 1;
  }
}
