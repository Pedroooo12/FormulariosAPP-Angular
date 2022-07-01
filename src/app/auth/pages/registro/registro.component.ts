import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vService.nombreApellidoPatter)]],
    email: ['', [Validators.required, Validators.pattern(this.vService.emailPattern)] , [this.emailValidator]],
    username: ['', [Validators.required, this.vService.noPuedeSerStrider ]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', Validators.required]
  },{
    //opciones al formGroup
    validators: [this.vService.camposIguales('password','password2')]
  });

  constructor(private fb: FormBuilder,
              private vService: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Pedro Egea',
      email: 'test1@gmail.com',
      username: 'pedroegeaa_',
      password: 123456,
      password2: 123456
    });
  }

  get emailErrorMSG(): string {
    const errors= this.miFormulario.get('email')?.errors
 
    if(errors?.['required']){
      return 'Email obligatorio'
    }
    if(errors?.['pattern']){
      return 'Escribe un emial con @ y final.com etc'
    }
    if(errors?.['emailTomado']){
      return 'Este email ya está en uso'
    }
 
    return ''
  }

  validacion(arg: string){
    return this.miFormulario.get([`${arg}`])?.touched && this.miFormulario.controls[`${arg}`]?.invalid;
  }

  validacionNoValido(arg: string){
    return this.miFormulario.get([`${arg}`])?.touched && this.miFormulario.controls[`${arg}`]?.invalid;
  }

  guardar(){

    if(this.miFormulario.valid){
      console.log(this.miFormulario.value);
    }
    this.miFormulario.markAllAsTouched();
  }

}
