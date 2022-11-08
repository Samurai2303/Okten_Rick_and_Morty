import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICharacter} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient:HttpClient) { }

  getCharacter(url: string): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(url);
  }

}
