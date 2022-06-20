import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductoDetalleComponentComponent } from './producto-detalle-component/producto-detalle-component.component';
import { ServicioProductosService } from './servicio-productos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    TiendaComponent,
    FooterComponent,
    ProductoDetalleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [ServicioProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
