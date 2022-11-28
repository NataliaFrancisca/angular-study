import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  animals: Animal[] = [
    {name: 'Turca', type: 'Dog', age: 22},
    {name: 'Eduard', type: 'Cat', age: 100},
    {name: 'Friday', type: 'Dog', age: 2},
    {name: 'Pedro', type: 'Horse', age: 23}
  ]

  animalDetails = "";

  sports = ['Vôlei', 'Basquete', 'Handball', 'Ginastica Artistica'];

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal) : void{
    this.animalDetails = `O animal tem ${animal.age} anos!`
  }

}
