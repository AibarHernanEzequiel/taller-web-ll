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
  descuento : Number = 0;

  constructor(private productoServicio: ServicioProductosService) {
    this.Productos = this.productoServicio.getProductos();
  }

  ngOnInit(): void {
    this.productoConDescuento(this.Productos);
  }

  agregarProducto(id: string, cantidad: number): void {
    this.productoServicio.agregarProducto(id, cantidad);
    alert('Producto agregado existosamente');
  }


  productoConDescuento(Productos : Producto[]) {
    let tieneDescuento = <const> 'false';

    Productos.map(function(element){
      element.tieneDescuento = false;
        if(element.descuento > 0) {
          element.tieneDescuento = true;
        }
    })
  }

}
