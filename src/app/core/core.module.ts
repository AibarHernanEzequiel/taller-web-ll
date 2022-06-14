import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { BannerComponent } from '../components/banner/banner.component';
import { TiendaComponent } from '../components/tienda/tienda.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    TiendaComponent,
    FooterComponent,
    CoreComponent,
  ],
  imports: [CommonModule],
})
export class CoreModule {}
