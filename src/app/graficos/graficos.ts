import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-graficos',
  standalone: true,
  templateUrl: './graficos.html',
  styleUrl: './graficos.css',
  imports: [CommonModule, FormsModule]
})
export class Graficos {

  semestreSelecionado: string = "2025-01";

  dados: any = {
    "2025-01": {
      desistentes: 5,
      aprovados: 80,
      avaliaram: 90
    },
    "2024-02": {
      desistentes: 12,
      aprovados: 70,
      avaliaram: 55
    }
  };

  valores = {
    desistentes: 0,
    aprovados: 0,
    avaliaram: 0
  };

  atualizarGraficos() {
    const info = this.dados[this.semestreSelecionado];

    if (!info) return;

    this.valores.desistentes = info.desistentes;
    this.valores.aprovados = info.aprovados;
    this.valores.avaliaram = info.avaliaram;
  }

  ngOnInit() {
    this.atualizarGraficos();
  }
}
