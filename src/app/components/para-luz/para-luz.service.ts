import { Injectable } from '@angular/core';
// 1- importas la dependencia
import { HttpClient } from '@angular/common/http';
// el observable es de esta libreria
import { Observable } from 'rxjs';
import { Usuario } from './usuarios.interface';
@Injectable({
  providedIn: 'root',
})
export class ParaLuzService {
  // 2 - inyectas la dependencia HttpClient
  constructor(private http: HttpClient) {}
  private url: string = 'https//localhost:3000/tal-cosa';
  /* 3- creas un metodo que te devuelva un observable
   acordate de crear un interfaz en este caso es Usuario y que sea array
   para que devuelva todo en un array y poder iterarlo en el html */
  obtenerTodosLosUsuario(): Observable<Usuario[]> {
    return this.http.get(this.url) as Observable<Usuario[]>;
    /* Se pone 'as'  porque al ser un observable no sabe que es lo que va a devolver entonces vos aclaras que va a devolver un array de usuarios*/
  }

  /* asi como tenes el metodo get tambien tenes:
  this.http.post(this.url,{objeto body})
  this.http.put()
  this.http.delete()
  y todos reciben la url y en el caso del post le tenes mandar un objeto body que es el que tiene los datos del usuario a registrar
   */
}
