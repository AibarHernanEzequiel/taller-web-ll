import { Injectable, OnInit } from '@angular/core';
import { elementAt, Observable } from 'rxjs';
import { Producto } from './components/header/producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService implements OnInit{

  Productos : Producto[];
  ProductosCarrito : Producto[];
  url = "http://localhost:3900/api/"

  constructor(private http: HttpClient) {
    // this.Productos= [
    //   {
    //     id : 1,
    //     nombre : 'Producto1',
    //     precio : 50,
    //     cantidad : 1
    //   },
    //   {
    //     id : 2,
    //     nombre : 'Producto2',
    //     precio : 25,
    //     cantidad : 1
    //   },
    //   {
    //     id : 3,
    //     nombre : 'Producto3',
    //     precio : 100,
    //     cantidad : 1
    //   },
    //   {
    //     id : 4,
    //     nombre : 'Producto4',
    //     precio : 750,
    //     cantidad : 1
    //   },
    //   {
    //     id : 5,
    //     nombre : 'Producto5',
    //     precio : 300,
    //     cantidad : 1
    //   },
    //   {
    //     id : 6,
    //     nombre : 'Producto6',
    //     precio : 230,
    //     cantidad : 1
    //   }
    // ]
    // this.Productos= this.getProductos();
    this.Productos = [];
    this.ProductosCarrito = [];
   }

  ngOnInit(): void {
  }

  getProductos():Producto[] {
    let header= new HttpHeaders().set('Type-content', 'aplication/json');

      var obs = this.http.get(this.url+'getAllArticle', { 
        headers : header
       })  

       obs.subscribe((resp : any) =>{ 
        resp.articles.forEach((element:Producto) => {
          this.Productos.push(element)
        });
         });
    return this.Productos;
  }

  getProductosCarrito():Producto[] {
    return this.ProductosCarrito;
  }

  getProducto(id: string ):Producto | undefined {
    return this.Productos.find(element => element._id == id);
  }

  agregarProducto(id: string, cantidad:number):void{
    var indiceElement = this.ProductosCarrito.findIndex(element => element._id == id);
    if(indiceElement != -1){
      this.ProductosCarrito[indiceElement].cantidad += cantidad;
    }else{
      var producto = this.getProducto(id);
      if(producto != undefined) {
        producto.cantidad=cantidad
        this.ProductosCarrito.push(producto);
      }
      else console.log("error : producto no encontrado")
    }
  }
}
