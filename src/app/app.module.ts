import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { FooterComponent } from './components/footer/footer.component';
import { BigTiendaComponent } from './components/big-tienda/big-tienda.component';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from './modules/core/core.module';
import { AdminModule } from './modules/admin/admin.module';
import { LoginComponent } from './components/login/login.component';
import { ServicioUserService } from './services/servicio-user.services';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    TiendaComponent,
    FooterComponent,
    BigTiendaComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServicioUserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
