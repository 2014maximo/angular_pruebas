import { obtenerRobots } from "./arreglos";

describe('Pruebas de ARREGLOS', () => {

    it('Debe de retornar al menos 3 robots', () => {
        
        const resp = obtenerRobots();

        expect( resp.length ).toBe( 4 );
        expect( resp.length ).toBeGreaterThanOrEqual( 4 );
    });

    it('Debe de contener Megaman y Ultron', () => {
        
        const resp = obtenerRobots();

        expect( resp ).toContain( 'Megaman' );
        expect( resp ).toContain( 'Ultrón' );
    });
});