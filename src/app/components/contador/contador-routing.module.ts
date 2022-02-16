import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './contador.component';
import { Somar2Component } from './somar2/somar2.component';
import { Somar4Component } from './somar4/somar4.component';

const routes: Routes = [
  { path: '',
    children: [
      {
        path: '',
        component: ContadorComponent,
      },
      {
        path:'somar2',
        component: Somar2Component
      },
      {
        path: 'somar4',
        component: Somar4Component
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContadorRoutingModule { }
