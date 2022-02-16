import { Component, OnInit } from '@angular/core';
import { ContadorService } from 'src/app/services/contador.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
  providers: [ContadorService]
})
export class ContadorComponent implements OnInit {

  constructor(public contadorService: ContadorService) { }

  ngOnInit(): void {
  }

}
