import { expect, test, describe } from 'vitest';
import { source, clone } from '../cloneMerge';

describe('Testing "cloneMerge" ', ( ) => {
                test('Testing the function "clone" ', () => {
                // Arrange -> Definir los datos que usaremos para la prueba
                const input = {
                    nombre: "Carmen",
                    apellido: "Sanchez",
                    edad: 34,
                };
                // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
                const result = clone(input);

                // Assert -> Compruebas que el resultado es el esperado
                expect(result).toEqual(input);
                });
});