import { Injectable, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { Producto } from './components/header/producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService implements OnInit{

  Productos : Producto[];
  ProductosCarrito : Producto[];

  constructor() {
    this.Productos= [
      {
        id : 1,
        nombre : 'Producto1',
        precio : 50,
        cantidad : 1, 
        descripcion : "Descripcion y detalles del producto"
      },
      {
        id : 2,
        nombre : 'Producto2',
        precio : 25,
        cantidad : 1,
        descripcion : "Descripcion y detalles del producto"
      },
      {
        id : 3,
        nombre : 'Producto3',
        precio : 100,
        cantidad : 1,
        descripcion : "Descripcion y detalles del producto"
      },
      {
        id : 4,
        nombre : 'Producto4',
        precio : 750,
        cantidad : 1,
        descripcion : "Descripcion y detalles del producto"
      },
      {
        id : 5,
        nombre : 'Producto5',
        precio : 300,
        cantidad : 1,
        descripcion : "Descripcion y detalles del producto"
      },
      {
        id : 6,
        nombre : 'Producto6',
        precio : 230,
        cantidad : 1,
        descripcion : "Descripcion y detalles del producto"
      }
    ]
    this.ProductosCarrito = [];
   }

  ngOnInit(): void {
  }

  getProductos():Producto[] {
    console.log(this.Productos)
    return this.Productos;
  }

  getProductosCarrito():Producto[] {
    console.log(this.ProductosCarrito)
    return this.ProductosCarrito;
  }

  getProducto(id: number ):Producto | undefined {
    return this.Productos.find(element => element.id == id);
  }

  agregarProducto(id: number, cantidad:number):void{
    var indiceElement = this.ProductosCarrito.findIndex(element => element.id == id);
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
