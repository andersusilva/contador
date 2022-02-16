import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ContadorComponent } from './components/contador/contador.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ContadorService } from './services/contador.service';
import { Somar2Component } from './components/contador/somar2/somar2.component';
import { Somar4Component } from './components/contador/somar4/somar4.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    FooterComponent,
    MainComponent,
    Somar2Component,
    Somar4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [
    ContadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
