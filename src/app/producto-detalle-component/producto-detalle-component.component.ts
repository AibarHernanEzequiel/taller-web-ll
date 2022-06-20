import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../components/header/producto';
import { ServicioProductosService } from '../servicio-productos.service';

@Component({
  selector: 'app-producto-detalle-component',
  templateUrl: './producto-detalle-component.component.html',
  styleUrls: ['./producto-detalle-component.component.css']
})
export class ProductoDetalleComponentComponent implements OnInit {

  indice : number;
  producto : Producto | undefined;
  constructor(private route:ActivatedRoute, private productosServicio:ServicioProductosService) {
    this.indice = this.route.snapshot.params['id'];
    this.producto = this.productosServicio.getProducto(this.indice);
   }

  ngOnInit(): void {
  }

  agregarProducto(id:number | undefined, cantidad: string):void{
    if(id != undefined){
      this.productosServicio.agregarProducto(id, Number(cantidad));
    }
  }

}
