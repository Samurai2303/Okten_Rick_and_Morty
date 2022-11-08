import {Component, Input, OnInit} from '@angular/core';

import {ICharacter} from "../../interfaces";
import {CharacterService} from "../../services";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input()
  character: string;
  characterInfo: ICharacter;

  constructor(private characterService:CharacterService) {
  }

  ngOnInit(): void {
    this.characterService.getCharacter(this.character).subscribe(value => this.characterInfo = value);
  }

}
