import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      [ 'Metal Gear' ],
      [ 'Mario Bros' ]
    ], [Validators.required, Validators.minLength(2)] )
  })

  nuevoFavorito: FormControl = this.fb.control(
    '', Validators.required
  )

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  validacion(arg: string){
    return this.miFormulario.controls[`${arg}`].errors && this.miFormulario.controls[`${arg}`].touched;
  }

  validacionDinamicos(){
    return this.miFormulario.controls[`favoritos`].invalid && this.miFormulario.controls[`favoritos`].touched;
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }

    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ));
    this.nuevoFavorito.reset();
  }

  eliminarFavorito( index: number){
    this.favoritosArr.removeAt(index);
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
  }

}
