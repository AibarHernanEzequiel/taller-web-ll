import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ServicioUserService } from 'src/app/services/servicio-user.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-confirmacion',
    templateUrl: './confirmacion.component.html',
    styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

    constructor(private servicio: ServicioUserService, private router: Router) { }

    ngOnInit(): void { }


    confirmForm = new FormGroup({
        username: new FormControl('', Validators.required),
        token: new FormControl('', Validators.required)
    });

    verificar(codigo: number, username: string) {
        this.servicio.verificarEmail(codigo,username).subscribe(data => {
            console.log(data)
            this.router.navigate(['login']);
        })
    }

    reenviar() {
        this.servicio.reenviarCodigo(this.confirmForm.get('username')?.value).subscribe(data => {
            console.log(data)
        })
    }

    onSubmit() {
         var username=(this.confirmForm.get('username')?.value);
         var codigo=(this.confirmForm.get('token')?.value);
         this.verificar(codigo,username); 
    }


}