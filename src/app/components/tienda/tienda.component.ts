import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ServicioProductosService } from 'src/app/services/servicio-productos.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  Productos: Producto[];

  constructor(private productoServicio: ServicioProductosService) {
    this.Productos = this.productoServicio.getProductos();
  }

  ngOnInit(): void {}

  agregarProducto(id: string, cantidad: number): void {
    this.productoServicio.agregarProducto(id, cantidad);
    alert('Producto agregado existosamente');
  }
}
