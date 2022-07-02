import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ServicioUserService } from 'src/app/services/servicio-user.services';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { DataResponse } from 'src/app/interfaces/dataResponse.interface';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     
  constructor(private servicio: ServicioUserService, private router: Router) {}

  ngOnInit(): void {} 


userForm = new FormGroup({
  username: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
});

loguearse(username: string, password: string){
 this.servicio.enviarUsuario(username,password).subscribe((data: any) =>{
  let res = (data.body as DataResponse)
  this.servicio.setToken('sesionIniciada');
  this.router.navigate(['home'])
  .then(() => {
    window.location.reload();
  });
 })
}

onSubmit() {
  var username=(this.userForm.get('username')?.value);
  var password=(this.userForm.get('password')?.value);
  this.loguearse(username,password);  
}

}

