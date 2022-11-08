import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesHeaderComponent } from './components/episodes-header/episodes-header.component';
import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { EpisodeDetailsPageComponent } from './pages/episode-details-page/episode-details-page.component';
import { EpisodeHeaderComponent } from './components/episode-header/episode-header.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';
import {CharacterService, EpisodesService} from "./services";


@NgModule({
  declarations: [
    EpisodesHeaderComponent,
    EpisodesPageComponent,
    EpisodesComponent,
    EpisodeComponent,
    EpisodeDetailsPageComponent,
    EpisodeHeaderComponent,
    CharactersComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule
  ],
  providers:[
    EpisodesService,
    CharacterService
  ]
})
export class EpisodesModule { }
