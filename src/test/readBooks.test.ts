import { expect, test, describe } from 'vitest';
import { books, isBookRead } from '../readBooks';

describe('Testing "readBooks" ', ( ) => {
        describe('Testing the function isBookRead', ( ) => {
            test('Testing the option "Harry Potter y la piedra filosofal", it should return true', ( ) => {
                // Arrange -> Definir los datos que usaremos para la prueba
                const input1 = books;
                const input2 = "Harry Potter y la piedra filosofal";

                // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
                const result = isBookRead( input1, input2 );

                // Assert -> Compruebas que el resultado es el esperado
                expect(result).toBe(true)
            } );      
            test('Testing the option "Canción de hielo y fuego", it should return false', ( ) => {
                // Arrange -> Definir los datos que usaremos para la prueba
                const input1 = books;
                const input2 = "Canción de hielo y fuego";

                // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
                const result = isBookRead( input1, input2 );

                // Assert -> Compruebas que el resultado es el esperado
                expect(result).toBe(false)
            } );    
            test('Testing the option "Devastación", it should return true', ( ) => {
                // Arrange -> Definir los datos que usaremos para la prueba
                const input1 = books;
                const input2 = "Devastación";

                // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
                const result = isBookRead( input1, input2 );

                // Assert -> Compruebas que el resultado es el esperado
                expect(result).toBe(true)
            } );    
            test('Testing the option "Los Pilares de la Tierra", it should return false', ( ) => {
                // Arrange -> Definir los datos que usaremos para la prueba
                const input1 = books;
                const input2 = "Los Pilares de la Tierra";

                // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
                const result = isBookRead( input1, input2 );

                // Assert -> Compruebas que el resultado es el esperado
                expect(result).toBe(false)
            } );       
        } );
    } );

