import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';



describe('AppComponent', () => {

    beforeEach(async (() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                NavbarComponent
            ],
            imports: [
                RouterTestingModule.withRoutes([])
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        });
    }));

    it('Se crea el app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('Debe de tener un router-outlet', () => {
        
        const fixture = TestBed.createComponent(AppComponent);
        const debugElement = fixture.debugElement.query(By.directive( RouterOutlet));

        expect(debugElement).not.toBeNull();
    })

    it('Debe de tener un link a la página de Médicos', () => {

        const fixture = TestBed.createComponent(AppComponent);
        const elementos = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ));

        let existe = false;

        for( const elem of elementos ) {
            if ( elem.attributes['routerLink'] === '/medicos') {
                existe = true;
                break;
            }
        }

        expect(existe).toBeTruthy();
    });
});