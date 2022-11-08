import {IEpisode} from "./episode.interface";

export interface IAllEpisodes {
  info: {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
  };
  results: IEpisode[];
}
