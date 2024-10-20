import { expect, test, describe } from 'vitest';
import { array1, array2, concat } from '../concat';

describe('Testing "concat.ts" ', ( ) => {
                test('Testing the function concat', () => {
                // Arrange -> Definir los datos que usaremos para la prueba
                const input1 = array1 ;
                const input2 = array2 ;

                // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
                const result1 = concat(...input1, ...input2);
            
                // Assert -> Compruebas que el resultado es el esperado
                expect(result1).toEqual(['primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto'])
                });
});