export default class SemestreJS {
  constructor() {
    this.professores = [
      { codigo: 'CPINT321', disciplina: 'Introdução à Computação', nome: 'Edmundo Gonzalez' },
      { codigo: 'MAT101', disciplina: 'Cálculo I', nome: 'Carla Rodrigues' },
      { codigo: 'FIS201', disciplina: 'Física I', nome: 'Henrique Lima' }
    ];

    this.profSelecionado = null;

    this.estrelas = [1, 2, 3, 4, 5];

    this.notaConteudo = null;
    this.notaProfessor = null;
    this.comentario = '';

    this.showSuccess = false;
    this.showError = false;
  }

  enviar() {
    if (!this.profSelecionado || !this.notaConteudo || !this.notaProfessor || !this.comentario.trim()) {
      this.showError = true;
      return;
    }

    this.showSuccess = true;

    console.log("Avaliação enviada:", {
      professor: this.profSelecionado,
      notaConteudo: this.notaConteudo,
      notaProfessor: this.notaProfessor,
      comentario: this.comentario
    });

    this.profSelecionado = null;
    this.notaConteudo = null;
    this.notaProfessor = null;
    this.comentario = "";
  }

  closeModals() {
    this.showSuccess = false;
    this.showError = false;
  }
}
