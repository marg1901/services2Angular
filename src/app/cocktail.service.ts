import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from './model/cocktail';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(
    public http: HttpClient
  ) {}

  getCocktails(): Observable<Cocktail[]>{
    return this.http.get<Cocktail[]>("assets/cocktails.json");
  }
}
