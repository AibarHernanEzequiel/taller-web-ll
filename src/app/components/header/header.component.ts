import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioProductosService } from 'src/app/services/servicio-productos.service';
import { ServicioUserService } from 'src/app/services/servicio-user.services';

import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ProductosCarrito: Producto[];
  Total: number;
  Session: boolean;
  @ViewChild('buttonClose') buttonClose: ElementRef;

  constructor(private productoServicio: ServicioProductosService, private servicioUser: ServicioUserService, private router: Router) {
    this.ProductosCarrito = this.productoServicio.getProductosCarrito();
    this.calcularTotal();
    if(this.servicioUser.getToken() == 'sesionIniciada'){
      this.Session=true;
    }else{
      this.Session=false;
    }

    console.log(this.Session)
  }

  ngOnInit(): void {}

  cerrarSession():void {
    console.log('asd')
    this.servicioUser.deleteToken();
    this.router.navigate(['home'])
    .then(() => {
      window.location.reload();
    });
  }

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
    if(this.Session){
      if(this.ProductosCarrito.length > 0){
        let confirmacion = confirm('¿Estas seguro de realizar la compra?');
    let fecha = new Date();
    if (confirmacion) {
      const body = {
        total: this.Total,
        productos: this.ProductosCarrito,
        fecha: fecha.toLocaleDateString(),
      };
      this.buttonClose.nativeElement.click();
      this.productoServicio
        .realizarPedido('/confirmar-pedido', body)
        .subscribe((respuesta) => console.log('SE ENVIO CORRECTAMENTE'));
        alert('Compra realizada correctamente');
    }
      }else{
        alert('No hay productos en el carrito.');
      }
    }else{
      alert('Inicie sesion antes de comprar');
    }
  }
}
