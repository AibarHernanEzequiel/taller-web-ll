import { TestBed } from '@angular/core/testing';

import { ServicioProductosService } from './servicio-productos.service';

describe('ServicioProductosService', () => {
  let service: ServicioProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
