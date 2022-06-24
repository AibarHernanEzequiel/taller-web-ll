import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ServicioUserService } from 'src/app/services/servicio-user.services';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     
  constructor(private servicio: ServicioUserService, private router: Router) {}

  ngOnInit(): void {} 


userForm = new FormGroup({
  Username: new FormControl('', Validators.required),
  Password: new FormControl('', Validators.required),
});

loguearse(Username: string, Password: string){
 this.servicio.enviarUsuario(Username,Password).subscribe(data =>{
  console.log(data)
  this.router.navigate(['home']);
 })
}

onSubmit() {
  var Username=(this.userForm.get('Username')?.value);
  var Password=(this.userForm.get('Password')?.value);
  this.loguearse(Username,Password);  
}

}

