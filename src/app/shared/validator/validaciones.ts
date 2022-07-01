import { FormControl } from '@angular/forms';

export const nombreApellidoPatter: string = '([a-zA-Zá-úÁ-Ú]+) ([a-zA-Zá-úÁ-Ú]+)';

export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


export const noPuedeSerStrider = (control: FormControl) => {
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