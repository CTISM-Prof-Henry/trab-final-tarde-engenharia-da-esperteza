import { Component } from '@angular/core';

@Component({
  selector: 'app-semestre',
  standalone: true,
  templateUrl: './semestre.html',
  styleUrls: ['./semestre.css']
})
export class Semestre {

  showSuccess = false;
  showError = false;

  onEnviar() {
    this.showSuccess = true;
  }

  closeModals() {
    this.showSuccess = false;
    this.showError = false;
  }
}
