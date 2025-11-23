import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  templateUrl: './pagina-inicial.html',
  styleUrl: './pagina-inicial.css',
  imports: [RouterLink]
})
export class PaginaInicial {}
