import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameOffer } from '../model/game.mode';

@Injectable({
  providedIn: 'root',
})
export class GamesApiService {
  private base_url = 'https://www.gamerpower.com/api/giveaways';

  constructor(private http: HttpClient) {}

  public getGames(): Observable<GameOffer[]> {
    return this.http.get<GameOffer[]>(this.base_url);
  }

  public getGameById(id: number): Observable<GameOffer> {
    let params = new HttpParams();
    params = params.append('id', id);

    return this.http.get<GameOffer>(this.base_url, { params });
  }
}
