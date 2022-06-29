import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioUserService } from 'src/app/services/servicio-user.services';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private servicio: ServicioUserService, private router: Router) {
  }


  pattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])$";

  ngOnInit(): void {
  }

  signupForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    contraseña: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
    confirmContraseña: new FormControl('', Validators.required)
  });

  registrarse(Nombre: string, Apellido: string, Email: string, Password: string) {
    this.servicio.registrarUsuario(Nombre, Apellido, Email, Password).subscribe(data => {
      console.log(data)
      this.router.navigate(['verificar']);
    }, error => { //Si no registra entra aca
      console.log(error);
      this.signupForm.reset(); //resetea el form
    })


  }

  onSubmit() {
    var Nombre = (this.signupForm.get('nombre')?.value);
    var Apellido = (this.signupForm.get('apellido')?.value);
    var Email = (this.signupForm.get('email')?.value);
    var Password = (this.signupForm.get('contraseña')?.value);
    this.registrarse(Nombre, Apellido, Email, Password);
  }

}