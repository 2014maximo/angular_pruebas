import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];

  constructor( public _medicoService: MedicoService) { }

  ngOnInit(): void {
  }

  public saludaMedico( nombre: string ){
    return `Hola ${ nombre }`;
  }

  public obtenerMedicos(){
    this._medicoService.getMedicos().subscribe( (medicos: any[]) => this.medicos = medicos )
  }
}
