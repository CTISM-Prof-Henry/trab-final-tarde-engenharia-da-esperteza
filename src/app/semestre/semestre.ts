import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-semestre',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './semestre.html',
  styleUrls: ['./semestre.css']
})
export class Semestre {
  
  professores = [
    { codigo: 'CPINT321', disciplina: 'Introdução à Computação', nome: 'Edmundo Gonzalez' },
    { codigo: 'MAT101', disciplina: 'Cálculo I', nome: 'Carla Rodrigues' },
    { codigo: 'FIS201', disciplina: 'Física I', nome: 'Henrique Lima' }
  ];

  profSelecionado: any = null;

  estrelas = [1, 2, 3, 4, 5];

  notaConteudo: number | null = null;
  notaProfessor: number | null = null;
  comentario: string = '';

  showSuccess = false;
  showError = false;

  enviar() {
    if (!this.profSelecionado || !this.notaConteudo || !this.notaProfessor || !this.comentario.trim()) {
      this.showError = true;
      return;
    }

    this.showSuccess = true;

    console.log('Avaliação enviada:', {
      professor: this.profSelecionado,
      notaConteudo: this.notaConteudo,
      notaProfessor: this.notaProfessor,
      comentario: this.comentario
    });

    this.profSelecionado = null;
    this.notaConteudo = null;
    this.notaProfessor = null;
    this.comentario = '';
  }

  closeModals() {
    this.showSuccess = false;
    this.showError = false;
  }
}
