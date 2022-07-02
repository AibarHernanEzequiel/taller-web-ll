import { Injectable, OnInit } from '@angular/core';
// 1- importas la dependencia
import { HttpClient } from '@angular/common/http';
// el observable es de esta libreria
import { Observable } from 'rxjs';
import { User } from '../interfaces/usuario.interface';

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


  

    

      enviarUsuario(username:string, password:string ) {
        return this.http.post('http://localhost:3900/api/login',{username,password},{observe:'response'}) ;
      }

      registrarUsuario(name: string, family_name: string, email:string, password:string ) {
        return this.http.post('http://localhost:3900/api/register-user',{name,family_name,email,password},{observe:'response'}) ;
      }

      verificarEmail( codigo: number,username: string ) {
        return this.http.post('http://localhost:3900/api/confirm-user',{codigo,username},{observe:'response'}) ;
      }

      reenviarCodigo( username: string ) {
        return this.http.post('http://localhost:3900/api/resend-code',{username},{observe:'response'}) ;
      }



}
