import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbueloComponent } from './components/abuelo/abuelo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Hijo1Component } from './components/hijo1/hijo1.component';
import { Hijo2Component } from './components/hijo2/hijo2.component';
import { Nieto1Component } from './components/nieto1/nieto1.component';

@NgModule({
  declarations: [
    AppComponent,
    AbueloComponent,
    Hijo1Component,
    Hijo2Component,
    Nieto1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
