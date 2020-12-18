import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Subject } from 'rxjs';

class FakeRouter {
  navigate( params ) {

  }
}

class FakeActivatedRoute {
  // params: Observable<any> = EMPTY;

  private subject = new Subject();

  push( valor ) {
    this.subject.next( valor );
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        { provide: Router, useClass: FakeRouter },
        ActivatedRoute
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('Debe de redireccionar a Médico cuando se guarde', () => {
    const router = TestBed.get(Router);
    const spy = spyOn( router, 'navigate');

    component.guardarMedico();

    expect( spy ).toHaveBeenCalledWith( ['medico', '123']);
  });

  xit( 'Debe de colocar el id = nuevo', () => {

    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push({ id: 'nuevo'});

    expect( component.id ).toBe('nuevo');
  })
});
