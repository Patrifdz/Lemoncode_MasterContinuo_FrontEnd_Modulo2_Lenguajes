import { expect, test, describe } from 'vitest';

import { head } from '../arrayOperations';
 describe('Testing "language.ts"', ( ) => {
test('Testing function "head"', () => {
  // Arrange -> Definir los datos que usaremos para la prueba
  const input = ["element1", "element2", "element3", "element4"];;

  // Act -> Ejecutas la acción que quieres probar, por ejemplo, ejecutas la función
  const result = functionName(input);

  // Assert -> Compruebas que el resultado es el esperado
  expect(result).toBe(expectedValue);
});
});


