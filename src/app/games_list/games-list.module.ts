import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesListRoutingModule } from './games-list-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GameCardComponent } from './game-card/game-card.component';

@NgModule({
  declarations: [
    GameCardComponent
  ],
  imports: [CommonModule, GamesListRoutingModule, SharedModule],
})
export class GamesListModule {}
