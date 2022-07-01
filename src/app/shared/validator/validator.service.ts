import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPatter: string = '([a-zA-Zá-úÁ-Ú]+) ([a-zA-Zá-úÁ-Ú]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }

  noPuedeSerStrider(control: FormControl): ValidationErrors | null{
    const valor = control.value?.trim().toLowerCase();
    
    if(valor === 'strider'){
      // return error
      return{
        noStrider: true
      } 
    }

    //no hay errores
    return null;
  }

  camposIguales(campo1: string , campo2: string){

    return (formGroup: AbstractControl ): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if(pass1 !== pass2){
        //establecer un error al password2
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true }
      }

      //quitar el error
      formGroup.get(campo2)?.setErrors( null );
      return null;
    }
  }
}
