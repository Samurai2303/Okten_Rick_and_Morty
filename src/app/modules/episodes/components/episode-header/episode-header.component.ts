import {Component, Input, OnInit} from '@angular/core';

import {IEpisode} from "../../interfaces";

@Component({
  selector: 'app-episode-header',
  templateUrl: './episode-header.component.html',
  styleUrls: ['./episode-header.component.css']
})
export class EpisodeHeaderComponent implements OnInit {
  @Input()
  episode: IEpisode;

  constructor() {
  }

  ngOnInit(): void {
  }

}
