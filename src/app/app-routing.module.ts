import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TarefasRoutes} from './tarefas';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/tarefas/listar',
    pathMatch: 'full'
  },
  ...TarefasRoutes // dá um merge entre outras rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
