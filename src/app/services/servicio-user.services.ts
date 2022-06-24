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


  

    obtenerTodosLosUsuario(): Observable<User[]> {
        return this.http.get('http://localhost/api/users') as Observable<User[]>;
      }

      enviarUsuario(Username:string, Password:string ) {
        return this.http.post('http://localhost:3900/api/login',{Username,Password}) ;
      }

      registrarUsuario(name: string, family_name: string, email:string, password:string ) {
        return this.http.post('http://localhost:3900/api/register-user',{name,family_name,email,password}) ;
      }



}
