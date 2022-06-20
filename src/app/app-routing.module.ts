import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoDetalleComponentComponent } from './producto-detalle-component/producto-detalle-component.component';
import { TiendaComponent } from './components/tienda/tienda.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'AppComponent', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  {path:'detalle/:id', component:ProductoDetalleComponentComponent},
  {path:'', component:TiendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
