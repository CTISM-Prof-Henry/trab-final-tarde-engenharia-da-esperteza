import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-semestre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './semestre.html',
  styleUrl: './semestre.css'
})
export class Semestre {
  @ViewChild('comentario', { static: false }) comentarioRef!: ElementRef<HTMLTextAreaElement>;

  showSuccess = false;
  showError = false;

  onEnviar() {
    const r1 = document.querySelector<HTMLInputElement>("input[name='rating1']:checked");
    const r2 = document.querySelector<HTMLInputElement>("input[name='rating2']:checked");
    const comentario = this.comentarioRef?.nativeElement?.value?.trim() ?? '';

    if (!r1 || !r2 || comentario === '') {
      this.showError = true;
      // fecha automaticamente após 2.5s (opcional)
      setTimeout(() => this.showError = false, 2500);
      return;
    }

    this.showSuccess = true;
    setTimeout(() => this.showSuccess = false, 2500);

    // aqui você pode enviar os dados para a API / salvar no localStorage etc.
  }

  closeModals() {
    this.showError = false;
    this.showSuccess = false;
  }
}
