import { incrementar } from "./numeros";

describe('Pruebas de NÚMEROS', () => {

    it('Debe retornar 100, si el número ingresado es mayor a 100', () => {

        const res = incrementar( 300 );

        expect( res ).toBe( 100 )
    });

    it('Debe retornar el numero ingresado + 1, sino es mayor a 100', () => {

        const res = incrementar( 50 );

        expect( res ).toBe( 51 );
    });

});