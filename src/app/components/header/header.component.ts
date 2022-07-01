import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServicioProductosService } from 'src/app/services/servicio-productos.service';

import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ProductosCarrito: Producto[];
  Total: number;

  constructor(private productoServicio: ServicioProductosService) {
    this.ProductosCarrito = this.productoServicio.getProductosCarrito();
    this.calcularTotal();
  }

  ngOnInit(): void {}

  deleteProd(id: any): void {
    let confirmacion = confirm(
      '¿Estas seguro de eliminar este producto del carrito?'
    );
    if (confirmacion) {
      var indiceElement = this.ProductosCarrito.findIndex(
        (item) => item._id == id
      );
      if (indiceElement != -1) {
        if (this.ProductosCarrito[indiceElement].cantidad == 1) {
          this.ProductosCarrito.splice(indiceElement, 1);
        } else {
          this.ProductosCarrito[indiceElement].cantidad--;
        }
      } else {
        console.log('error');
      }
      this.calcularTotal();
    }
  }

  calcularTotal(): void {
    let tot = 0;
    if (this.ProductosCarrito.length != 0) {
      this.ProductosCarrito.forEach((element) => {
        tot += element.precio * element.cantidad;
      });
    }
    this.Total = tot;
  }

  actualizarCarrito(): void {
    this.ProductosCarrito = this.productoServicio.getProductosCarrito();
    this.calcularTotal();
  }

  public confirmarCompra() {
    let confirmacion = confirm('¿Estas seguro de realizar la compra?');
    let fecha = new Date();
    if (confirmacion) {
      const body = {
        total: this.Total,
        productos: this.ProductosCarrito,
        fecha: fecha.toLocaleDateString(),
      };
      this.productoServicio
        .realizarPedido('/confirmar-pedido', body)
        .subscribe((respuesta) => console.log('SE ENVIO CORRECTAMENTE'));
    }
  }
}
