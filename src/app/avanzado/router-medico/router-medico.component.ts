import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styles: [
  ]
})
export class RouterMedicoComponent implements OnInit {

  public id: string;

  constructor( public router: Router,
               public activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params
    .subscribe( params => {
      this.id = params['id'];
    })
  }

  guardarMedico() {
    this.router.navigate(['Medico', '123']);
  }

}