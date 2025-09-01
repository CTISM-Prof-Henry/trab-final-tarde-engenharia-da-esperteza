import { Routes } from '@angular/router';
import { PaginaInicial } from './pagina-inicial/pagina-inicial';
import { Docentes } from './docentes/docentes'; 
import { Semestre } from './semestre/semestre';
import { Graficos } from './graficos/graficos';

export const routes: Routes = [
  { path: '', component: PaginaInicial },
  { path: 'docentes', component: Docentes },
  { path: 'semestre', component: Semestre},
  { path: 'graficos', component: Graficos}
];
