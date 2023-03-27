import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../model/game.mode';

@Injectable({
  providedIn: 'root',
})
export class GamesApiService {
  private base_url = 'https://www.gamerpower.com/api/';

  constructor(private http: HttpClient) {}

  public getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.base_url}/giveaways`);
  }

  public getGameById(id: number): Observable<Game> {
    let params = new HttpParams();
    params = params.append('id', id);

    return this.http.get<Game>(`${this.base_url}/giveaway`, { params });
  }
}
