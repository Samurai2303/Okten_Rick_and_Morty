import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { EpisodesService } from '../../services';
import {IEpisode} from "../../interfaces";

@Component({
  selector: 'app-episode-details-page',
  templateUrl: './episode-details-page.component.html',
  styleUrls: ['./episode-details-page.component.css']
})
export class EpisodeDetailsPageComponent implements OnInit {
  episode: IEpisode;

  constructor(private episodesService:EpisodesService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.episode = this.router.getCurrentNavigation()?.extras.state?.['episode'];
      if (!this.episode) {
        this.episodesService.getById(id).subscribe(value => this.episode = value);
      }
    })
  }

}
