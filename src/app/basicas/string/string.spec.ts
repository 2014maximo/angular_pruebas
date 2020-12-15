import { mensaje } from "./string";


describe('Pruebas de STRING', () => {

    it('Debe de retornar un string', () => {

        const resp = mensaje('Alex')

        expect( typeof resp ).toBe('string');

    });

    it('Debe de retornar un saludo con el nombre enviado', () => {

        const nombre = 'Alex';

        const resp = mensaje(nombre);

        expect( resp ).toContain('Saludos ' + nombre );

    });

});