import { Injectable, OnInit } from '@angular/core';
// 1- importas la dependencia
import { HttpClient } from '@angular/common/http';
// el observable es de esta libreria
import { Observable } from 'rxjs';
import { User } from '../interfaces/usuario';
@Injectable({
  providedIn: 'root',
})
export class ServicioUserService {
  postId: any;

    constructor(private http: HttpClient) {
    }
  //  /*  */ private url: string = 'https//localhost:3000/tal-cosa';


  

    obtenerTodosLosUsuario(): Observable<User[]> {
        return this.http.get('https://localhost/users') as Observable<User[]>;
        /* Se pone 'as'  porque al ser un observable no sabe que es lo que va a devolver entonces vos aclaras que va a devolver un array de usuarios*/
      }

      enviarUsuario(Username:string, Password:string ) {
        return this.http.post('https://localhosts:3900/login',{Username,Password}) ;
        /* Se pone 'as'  porque al ser un observable no sabe que es lo que va a devolver entonces vos aclaras que va a devolver un array de usuarios*/
      }



}
