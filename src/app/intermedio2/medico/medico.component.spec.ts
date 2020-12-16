import { HttpClientModule } from "@angular/common/http";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { MedicoComponent } from "./medico.component"
import { MedicoService } from "./medico.service";

// En esta parte de pruebas ya se trabaja la parte de pruebas de integración.

describe('MEDICO COMPONENT', ()=> {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>; // Permite tener acceso a elementos del HTML

    beforeEach( () => {

        TestBed.configureTestingModule({ // A través de este TestBet se conecta como usando el module
            declarations: [ MedicoComponent ],
            providers: [ MedicoService ],
            imports: [ HttpClientModule ]
        });

        fixture = TestBed.createComponent( MedicoComponent );
        component = fixture.componentInstance;
    });

    it('Debe de crearse el componente', () => {
        expect( component ).toBeTruthy();
    });

})