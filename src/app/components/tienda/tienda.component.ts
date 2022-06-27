import { Component, OnInit } from '@angular/core'; /* 
import { ServicioProductosService } from 'src/app/services/servicio-productos.service';
import { Producto } from '../../interfaces/producto.interface';
 */
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  constructor(private service: ProductsService) {}

  productos: any;
  ngOnInit(): void {
    this.service
      .getAllProducts()
      .subscribe((observer) => (console.log(observer)));
  }

  /* constructor(private productoServicio: ServicioProductosService) {
    this.Productos = this.productoServicio.getProductos();
  }

  Productos: Producto[];

  ngOnInit(): void {}
  agregarProducto(id: string, cantidad: number): void {
    this.productoServicio.agregarProducto(id, cantidad);
  } */
}
