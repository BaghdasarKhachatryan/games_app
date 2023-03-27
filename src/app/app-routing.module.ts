import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./games_list/games-list.module').then((m) => m.GamesListModule),
  },
  {
    path: 'game/:id',
    loadChildren: () =>
      import('./game_details/game-details.module').then(
        (m) => m.GameDetailsModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
