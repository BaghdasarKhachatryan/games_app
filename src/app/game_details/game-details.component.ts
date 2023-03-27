import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { Game } from '../shared/model/game.mode';
import { GamesApiService } from '../shared/services/games-api.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit, OnDestroy {
  public platforms: string[] = [];
  public game: Game | null = null;
  private destroy$: Subject<boolean> = new Subject();
  public properties = {} as { [key: string]: string };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gamesApi: GamesApiService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        takeUntil(this.destroy$),
        switchMap((params: Params) => {
          return this.gamesApi.getGameById(params['id']);
        })
      )
      .subscribe((response: Game) => {
        this.game = response;
        this.platforms = this.game.platforms.split(',');
        for (const key in this.game) {
          if (
            key == 'title' ||
            key == 'platforms' ||
            key == 'users' ||
            key == 'thumbnail' ||
            key == 'image' ||
            key == 'id' ||
            key == 'instructions' ||
            key == 'description' ||
            key == 'open_giveaway_url' ||
            key == 'gamerpower_url'
          ) {
            continue;
          }
          this.properties[key] = (this.game as any)[key];
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
