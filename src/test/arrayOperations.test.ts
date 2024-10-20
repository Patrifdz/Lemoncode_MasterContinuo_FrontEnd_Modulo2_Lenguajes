import { expect, test, describe } from 'vitest';
import { head,  tail, init, last } from '../arrayOperations';
import { list1, list2 } from '../main';

describe('Testing "arrayOperations.ts"', ( ) => {
            test('Testing function "head"', () => {
              // Arrange -> Definir los datos que usaremos para la prueba
              const input = list1;

              // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
              const result = head(input);

              // Assert -> Compruebas que el resultado es el esperado
              expect(result).toBe("element1");
            });

            test('Testing function "tail"', () => {
              // Arrange -> Definir los datos que usaremos para la prueba
              const input = list1;

              // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
              const result = tail(input);

              // Assert -> Compruebas que el resultado es el esperado
              expect(result).toEqual(["element2", "element3", "element4"]);
            });

            test('Testing function "init"', () => {
              // Arrange -> Definir los datos que usaremos para la prueba
              const input = list1;
              const input2 = list2;

              // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
              const result = init(input);
              const result2 = init(input2);

              // Assert -> Compruebas que el resultado es el esperado
              expect(result).toEqual(["element1", "element2", "element3"]);
              expect(result2).toEqual([
                "element1", 
                "element2",
                "element3",
                "element4"]);
            });

            test('Testing function "last"', () => {
              // Arrange -> Definir los datos que usaremos para la prueba
              const input = list1;
              const input2 = list2;

              // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
              const result = last(input);
              const result2 = last(input2);

              // Assert -> Compruebas que el resultado es el esperado
              expect(result).toEqual(["element4"])
              expect(result2).toEqual(["element5"]);
            });
});


