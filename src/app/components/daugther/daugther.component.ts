import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-daugther',
  templateUrl: './daugther.component.html',
  styleUrls: ['./daugther.component.css']
})
export class DaugtherComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  @Input() name!:string;
  myName:string = "João";

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    console.log("bora mudar o número")
    this.changeNumber.emit();
  }
}
