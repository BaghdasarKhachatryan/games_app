import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../shared/model/game.mode';
import { GamesApiService } from '../shared/services/games-api.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {
  public game_list$: Observable<Game[]> | null = null;

  constructor(private gamesApi: GamesApiService) {}

  ngOnInit(): void {
    this.game_list$ = this.gamesApi.getGames();
    this.game_list$.subscribe((data: Game[]) => {
      console.log(data);
    });
  }
}
