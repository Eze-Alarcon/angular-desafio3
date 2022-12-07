import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from 'src/alumnos';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component implements OnInit {


  @Input() alumno: Alumno;
  @Output() seleccionado = new EventEmitter<Alumno>();

  constructor() { }

  ngOnInit(): void {
  }

  selec():void {
    this.seleccionado.emit(this.alumno)
  }

}
