import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';
import { ServicioProductosService } from '../../services/servicio-productos.service';

@Component({
  selector: 'app-producto-detalle-component',
  templateUrl: './producto-detalle-component.component.html',
  styleUrls: ['./producto-detalle-component.component.css'],
})
export class ProductoDetalleComponentComponent implements OnInit {
  id: string;
  producto: Producto | undefined;
  constructor(
    private route: ActivatedRoute,
    private productosServicio: ServicioProductosService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.producto = this.productosServicio.getProducto(this.id);
    console.log(this.producto);
  }

  ngOnInit(): void {}

  agregarProducto(id: string | undefined, cantidad: string): void {
    if (id != undefined) {
      this.productosServicio.agregarProducto(id, Number(cantidad));
    }
  }
}
