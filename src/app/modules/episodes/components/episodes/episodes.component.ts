import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IAllEpisodes} from "../../interfaces";
import {EpisodesService} from "../../services";
import {EpisodesPageComponent} from "../../pages/episodes-page/episodes-page.component";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  allEpisodesV: IAllEpisodes;
  @Output()
  allEpisodes = new EventEmitter<IAllEpisodes>();

  constructor(private episodesService: EpisodesService, private episodesPageComponent: EpisodesPageComponent) {
  }

  ngOnInit(): void {
    this.episodesPageComponent.getPage().subscribe((page) => {
      this.episodesService.getAll(page).subscribe(value => {
        this.allEpisodes.emit(value);
        this.allEpisodesV = value;
      });
    })
  }

}
