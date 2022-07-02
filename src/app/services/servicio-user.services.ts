import { Injectable, OnInit } from '@angular/core';
// 1- importas la dependencia
import { HttpClient } from '@angular/common/http';
// el observable es de esta libreria
import { Observable } from 'rxjs';
import { User } from '../interfaces/usuario';

interface registerResponse{
  success: boolean
}

@Injectable({
  providedIn: 'root',
})



export class ServicioUserService {
  postId: any;

    constructor(private http: HttpClient) {
    }


  

    

      enviarUsuario(Username:string, Password:string ) {
        return this.http.post('http://localhost:3900/api/login',{Username,Password}) ;
      }

      registrarUsuario(name: string, family_name: string, email:string, password:string ) {
        var newUser = {
            "name" : name,
            "familyName": family_name,
            "email": email,
            "password": password
        }
        return this.http.post('http://localhost:3900/api/register-user',newUser,{observe:'response'}) ;
      }

      verificarEmail( codigo: number,username: string ) {
        return this.http.post('http://localhost:3900/api/confirm-user',{codigo,username},{observe:'response'}) ;
      }



}
