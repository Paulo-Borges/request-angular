import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosLista } from './cursos-lista/cursos-lista';

const routes: Routes = [
  {path: '', component: CursosLista}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
