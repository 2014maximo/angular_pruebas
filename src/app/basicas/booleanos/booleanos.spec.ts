import { usuarioIngresado } from "./booleanos";

describe('Pruebas de BOOLEANOS', () => {

    it('Debe de retornar true', () => {

        const resp = usuarioIngresado();

        expect( resp ).toBeTruthy();
    });
});