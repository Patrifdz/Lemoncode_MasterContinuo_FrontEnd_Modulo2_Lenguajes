import { expect, test, describe } from 'vitest';
import { clone, merge  } from '../cloneMerge';

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

                test('Testing the function "merge" ', () => {
                    // Arrange -> Definir los datos que usaremos para la prueba
                    const inputA = {
                        name: "Maria", 
                        surname: "Ibañez", 
                        country: "SPA" 
                    };

                    const inputB = {
                        name: "Luisa", 
                        age: 31, 
                        married: true 
                    }
                    // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
                    const result = merge(inputA, inputB);
    
                    // Assert -> Compruebas que el resultado es el esperado
                    expect(result).toEqual({name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"});
                    });
});