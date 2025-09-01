import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from "./cabecalho/cabecalho";
import { Rodape } from "./rodape/rodape";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Cabecalho, Rodape],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'projeto-eng';
}
