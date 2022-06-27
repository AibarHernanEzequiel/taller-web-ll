import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  private url: string = 'http://localhost:3900/api';

  getAllProducts(): Observable<Producto[]> {
    return this.httpClient.get(`${this.url}/getAllArticles`) as Observable<
      Producto[]
    >;
  }

  getProductById(id_product: number): Observable<Producto[]> {
    return this.httpClient.get(`${this.url}/${id_product}`) as Observable<
      Producto[]
    >;
  }
}
