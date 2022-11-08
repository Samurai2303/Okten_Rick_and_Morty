import { Component, OnInit } from '@angular/core';
import {IAllEpisodes} from "../../interfaces";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-episodes-page',
  templateUrl: 'episodes-page.component.html',
  styleUrls: ['./episodes-page.component.css']
})
export class EpisodesPageComponent implements OnInit {
  page = new BehaviorSubject<number>(1);
  pageCount: number;

  constructor() { }

  ngOnInit(): void {

  }

  prev():void {
    if (this.page.getValue() > 1) {
      this.page.next(this.page.getValue() - 1);
    }
  }

  next(): void {
    if (this.pageCount > this.page.getValue()) {
      this.page.next(this.page.getValue() + 1);
    }
  }

  allEpisodesF(allEpisodes: IAllEpisodes):void {
    this.pageCount = allEpisodes.info.pages;
  }

  getPage(): Observable<number> {
    return this.page.asObservable();
  }



}
