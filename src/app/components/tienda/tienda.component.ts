import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ServicioProductosService } from 'src/app/services/servicio-productos.service';
import { ServicioUserService } from 'src/app/services/servicio-user.services';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  Productos: Producto[];
  Session: boolean;

  constructor(private productoServicio: ServicioProductosService , private servicioUser: ServicioUserService) {
    this.Productos = this.productoServicio.getUltimosProductos();
    if(this.servicioUser.getToken() == 'sesionIniciada'){
      this.Session=true;
    }else{
      this.Session=false;
    }

  }

  ngOnInit(): void {}

  agregarProducto(id: string, cantidad: number): void {
    this.productoServicio.agregarProducto(id, cantidad);
    alert('Producto agregado existosamente');
  }
}
