import { RankingComponent } from './ranking/ranking.component';

import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

export const routes: Routes = [
  {
    path:'', redirectTo: 'novo-cadastro', pathMatch: 'full'
  },
  {
    path: 'novo-cadastro', component: NovaTransferenciaComponent
  },
  {
    path: 'ranking', component: RankingComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
