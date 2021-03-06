import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BigTiendaComponent } from './components/big-tienda/big-tienda.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';

import { HomeComponent } from './components/home/home.component';
import { ProductoDetalleComponentComponent } from './components/producto-detalle-component/producto-detalle-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'big-tienda', component: BigTiendaComponent },
  { path: 'detalle/:id', component: ProductoDetalleComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'verificar', component: ConfirmacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
