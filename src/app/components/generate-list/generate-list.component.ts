import { Component, OnInit, Input } from '@angular/core';
import { Animal } from "src/app/interfaces/Animal"

import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-generate-list',
  templateUrl: './generate-list.component.html',
  styleUrls: ['./generate-list.component.css']
})
export class GenerateListComponent implements OnInit {

  @Input() animalName!: string;
  @Input() animalType!: string;
  @Input() animalAge!: string;

  animals: Animal[] = [
    {name: 'Turca', type: 'Dog', age: 22},
    {name: 'Eduard', type: 'Cat', age: 100},
    {name: 'Friday', type: 'Dog', age: 2},
    {name: 'Pedro', type: 'Horse', age: 23}
  ]

  animalDetails = "";


  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal) : void{
    this.animalDetails = `O animal tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal){
    this.animals = this.listService.remove(this.animals, animal);
  }

  addAnimal(){
    this.animals = this.listService.add(this.animals, {name: this.animalName, type: this.animalType, age: parseInt(this.animalAge)});
  }

}
