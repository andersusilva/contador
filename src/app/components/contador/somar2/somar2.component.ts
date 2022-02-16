import { Component, OnInit } from '@angular/core';
import { ContadorService } from 'src/app/services/contador.service';

@Component({
  selector: 'app-somar2',
  templateUrl: './somar2.component.html',
  styleUrls: ['./somar2.component.scss']
})
export class Somar2Component implements OnInit {
  somado: boolean = false;

  constructor(public contadorService: ContadorService) { }

  ngOnInit(): void {
  }

  // função que chama a service e acrescenta 2 ao numero atual
  public somar2() {
    this.contadorService.somar2();
    this.somado = true
  }

  // função que consulta o novo valor da variavel na service
  public novoValor() {
    return this.contadorService.getContador();
  }
}
