import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../../configs";
import {IAllEpisodes, IEpisode} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page = 1): Observable<IAllEpisodes> {
    return this.httpClient.get<IAllEpisodes>(urls.episodes, {params:{page}});
  }

  getById(id: number): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(`${urls.episodes}/${id}`);
  }

}
