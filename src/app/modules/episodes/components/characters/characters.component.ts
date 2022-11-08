import {Component, Input, OnInit} from '@angular/core';
import { IEpisode } from '../../interfaces';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  @Input()
  episode: IEpisode;

  constructor() {
  }

  ngOnInit(): void {
  }

}
