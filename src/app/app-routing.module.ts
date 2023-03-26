import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'games',
    loadChildren: () =>
      import('./games_list/movies-list.module').then((m) => m.MoviesListModule),
  },
  {
    path: 'game/:id',
    loadChildren: () => import('./game/game.module').then((m) => m.GameModule),
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
