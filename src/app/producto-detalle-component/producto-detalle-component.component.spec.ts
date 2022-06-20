import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetalleComponentComponent } from './producto-detalle-component.component';

describe('ProductoDetalleComponentComponent', () => {
  let component: ProductoDetalleComponentComponent;
  let fixture: ComponentFixture<ProductoDetalleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoDetalleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoDetalleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
