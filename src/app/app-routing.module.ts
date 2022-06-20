import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { BigTiendaComponent } from './components/big-tienda/big-tienda.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoDetalleComponentComponent } from './producto-detalle-component/producto-detalle-component.component';
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'big-tienda', component: BigTiendaComponent},
  {path:'detalle/:id', component:ProductoDetalleComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
