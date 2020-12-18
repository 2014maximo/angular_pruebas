import { RUTAS } from './app.routes';
import { MedicoComponent } from '../../intermedio2/medico/medico.component';

describe('RUTAS principales',() => {

    it('Debe de existir la ruda con el ID', () => {

        expect( RUTAS ).toContain({ path: 'medico/:id', component: MedicoComponent })
    })
})