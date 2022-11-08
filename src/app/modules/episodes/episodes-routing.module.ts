import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EpisodesPageComponent} from "./pages/episodes-page/episodes-page.component";
import {EpisodeDetailsPageComponent} from "./pages/episode-details-page/episode-details-page.component";

const routes: Routes = [
  {path: '', component: EpisodesPageComponent},
  {path:':id', component:EpisodeDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule {
}
