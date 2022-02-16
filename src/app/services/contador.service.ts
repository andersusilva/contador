import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  contagem: number = 1;

  constructor() {}

  somar4() {
    this.contagem = this.contagem + 4;
    this.setContador(this.contagem);
  }

  somar2() {
    this.contagem = this.contagem + 2;
    this.setContador(this.contagem);
  }

  getContador() {
    if(window.localStorage.getItem(`contador`) != null) {
      this.contagem = Number(window.localStorage.getItem(`contador`));
    }else {
      this.setContador(this.contagem);
    }

    return this.contagem;
  }

  setContador(valor: number) {
    window.localStorage.setItem(
      `contador`,
      JSON.stringify(valor)
    );
  }
}
