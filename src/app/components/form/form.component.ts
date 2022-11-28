import { Component, OnInit, Input } from '@angular/core';
import { Musica } from 'src/app/interfaces/Musica';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() nome!: string;
  @Input() artista!: string;
  @Input() nomeAlbum!: string;
  @Input() anoLancamento!: number;
  @Input() favoritarMusica!: boolean;

  musicas: Musica[] = [];

  constructor() { 
  }

  ngOnInit(): void {
  }

  salvarDados(){
    console.log("caramba, salva ai :)")

    this.musicas.push({
      nomeMusica: this.nome,
      nomeArtista: this.artista,
      nomeAlbum: this.nomeAlbum,
      anoLancamento: this.anoLancamento,
      favoritarMusica: this.normalizeInput(this.favoritarMusica)
    })
    
  }

  normalizeInput = (value: string | boolean) => value == 'true' ? true : false;

}
