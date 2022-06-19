import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTiendaComponent } from './big-tienda.component';

describe('BigTiendaComponent', () => {
  let component: BigTiendaComponent;
  let fixture: ComponentFixture<BigTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
