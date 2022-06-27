import { Component, OnInit } from '@angular/core';
import { ServicioProductosService } from 'src/app/servicio-productos.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-big-tienda',
  templateUrl: './big-tienda.component.html',
  styleUrls: ['./big-tienda.component.css']
})
export class BigTiendaComponent implements OnInit {

  constructor(private productoServicio: ServicioProductosService) {
    this.Productos= this.productoServicio.getProductos();
   }

  Productos : Producto[];
  ngOnInit(): void {
  }

  agregarProducto(id:string, cantidad: number):void{
    this.productoServicio.agregarProducto(id, cantidad);
  }

}
