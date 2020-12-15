import { Jugador2 } from './jugador2';

describe( 'pruebas EVENT EMITTER', () => {

    let jugador: Jugador2;

    beforeEach( () => jugador = new Jugador2() );

    it( 'Debe emitir un evento cuando recibe daño', () => {
        let nuevoHp = 0;

        jugador.hpCambia.subscribe( hp => {
            nuevoHp = hp;
        });

        jugador.recibeDanio(1000);

        expect( nuevoHp ).toBe(0);

    });

    it( 'Debe emitir un evento cuando recibe daño y sobrevivir si es menos de 10', () => {
        let nuevoHp = 0;

        jugador.hpCambia.subscribe( hp => {
            nuevoHp = hp;
        });

        jugador.recibeDanio(50);

        expect( nuevoHp ).toBe(50);

    });

});