import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Game } from 'src/app/shared/model/game.mode';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCardComponent {
  @Input() game!: Game;
}
