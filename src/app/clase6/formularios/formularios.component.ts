import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  public formularioPrincipal: FormGroup
  // public formularioSecundario: FormGroup

  public submitPressed: boolean = false

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formularioPrincipal = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      edad: [0, [Validators.max(99)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });

    // this.formularioSecundario = new FormGroup({ // otra manera
    //   nombre: new FormControl() // metodo manual con instancias
    // })
  }

  submit():void {
    this.submitPressed = true
    console.log(this.formularioPrincipal.value)
    console.log(this.formularioPrincipal.valid)
  }

}
