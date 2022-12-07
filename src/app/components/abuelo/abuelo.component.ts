import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Alumno } from 'src/alumnos';
import { Hijo2Component } from '../hijo2/hijo2.component';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.css']
})
export class AbueloComponent implements OnInit, AfterViewInit {

  public alumnos: Alumno[] = [
    {
      nombre: "juan",
      calificacion: 5
    },
    {
      nombre: "pepe",
      calificacion:  6
    },
    {
      nombre: "pedro",
      calificacion:  10
    },
  ]

  public seleccionado: Alumno = {
    nombre: "undefined",
    calificacion: 0
  };

  @ViewChild(Hijo2Component, {static: false}) hijoDos: Hijo2Component

  constructor() { }

  ngAfterViewInit(): void {
    console.log("this.hijoDos del ngAfterInit", this.hijoDos)
    // this.hijoDos.sayHello()
  }

  ngOnInit(): void {
    console.log("this.hijoDos del ngOnInit", this.hijoDos)
  }

  alumnoSeleccionado(alumno: Alumno): void {
    this.seleccionado = alumno
  }

}
