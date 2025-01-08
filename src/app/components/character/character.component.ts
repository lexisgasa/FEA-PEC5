import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/apiResponse';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  character?: Character;
  status: boolean = false;
  showDetails: boolean = false;

  constructor(
    private characterService: CharactersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.status = true;

    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier:', identifier);

    const response = this.characterService
      .getCharacterById(identifier!)
      .subscribe((character) => {
        this.character = character;
        this.status = false;
        console.log(this.character);
      });
  }
}
