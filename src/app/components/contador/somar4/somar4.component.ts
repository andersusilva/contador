import { Component, OnInit } from '@angular/core';
import { ContadorService } from 'src/app/services/contador.service';

@Component({
  selector: 'app-somar4',
  templateUrl: './somar4.component.html',
  styleUrls: ['./somar4.component.scss']
})
export class Somar4Component implements OnInit {
  somado: boolean = false;

  constructor(public contadorService: ContadorService) { }

  ngOnInit(): void {
  }

  // função que chama a service e acrescenta 2 ao numero atual
  public somar4() {
    this.contadorService.somar4();
    this.somado = true
  }

  // função que consulta o novo valor da variavel na service
  public novoValor() {
    return this.contadorService.getContador();
  }
}
