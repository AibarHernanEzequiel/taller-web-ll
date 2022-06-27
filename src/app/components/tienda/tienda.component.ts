import { Component, OnInit } from '@angular/core';
import { ServicioProductosService } from 'src/app/servicio-productos.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

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
