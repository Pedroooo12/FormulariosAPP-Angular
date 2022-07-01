import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    //console.log(this.miFormulario.value);
    console.log('Posteo correcto.');

    this.miFormulario.resetForm({
      precio: 1,
      existencias: 1
    });

  }

  validacion(argumento: string):boolean{
    return this.miFormulario?.controls[`${argumento}`]?.touched && this.miFormulario?.controls[`${argumento}`]?.invalid;
  }
}
