import { Component, OnInit } from '@angular/core';
import { ParaLuzService } from './para-luz.service';

@Component({
  selector: 'app-para-luz',
  templateUrl: './para-luz.component.html',
  styleUrls: ['./para-luz.component.css'],
})
export class ParaLuzComponent implements OnInit {
  /* Ultimo paso: creas una variable de tipo any */
  private variableQueGuardaElObservableQueRetornaElServicio: any;

  /* Inyectas el servicio que creaste */
  constructor(private servicio: ParaLuzService) {}


  /* y ahora tenes que lllamar al metodo y suscribirte al observable */
  ngOnInit(): void {
    /* lo hago aca pero podes crear un metodo a parte */
    this.servicio.obtenerTodosLosUsuario().subscribe((loQueVieneEnElObservable) => this.variableQueGuardaElObservableQueRetornaElServicio = loQueVieneEnElObservable);
    /* guardas lo que viene en el observable en la variable que creaste */
  /*  ahora te vas al html(para-luz.component.ts) y ya podes iterarlo con ngfor */
  }
}
