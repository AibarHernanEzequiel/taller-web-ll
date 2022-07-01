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
  username: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
});

loguearse(username: string, password: string){
 this.servicio.enviarUsuario(username,password).subscribe(data =>{
  console.log(data)
  this.router.navigate(['home']);
 })
}

onSubmit() {
  var username=(this.userForm.get('username')?.value);
  var password=(this.userForm.get('password')?.value);
  this.loguearse(username,password);  
}

}

