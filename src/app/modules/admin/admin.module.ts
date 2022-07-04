import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';

@NgModule({
  declarations: [AdminComponent, NavAdminComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [AdminComponent,NavAdminComponent],
})
export class AdminModule {}
