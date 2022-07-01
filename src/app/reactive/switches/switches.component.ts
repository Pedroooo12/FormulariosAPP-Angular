import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M' , Validators.required ],
    notificaciones: [ true, Validators.required],
    terminos: [true, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: true
    }); 

    this.miFormulario.valueChanges.subscribe(form => {
      delete form.terminos;
      this.persona = form;
    });

  }

  validacion(arg: string){
    return this.miFormulario.controls[`${arg}`].invalid && this.miFormulario.controls[`${arg}`].touched;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    const formValue = {...this.miFormulario.value};

    //eliminar notificaciones
    delete formValue.terminos;

    console.log(formValue);
  }
}
