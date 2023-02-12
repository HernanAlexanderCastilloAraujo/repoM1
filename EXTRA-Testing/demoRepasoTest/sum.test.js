const sum = require('./sum');

// it === test
it('should return 8 if adding 3 and 5', () => {
  expect(sum(3, 5)).toBe(8);
});

it('should return 15 if adding 7 and 8', () => {
  expect(sum(7, 8)).toBe(15);
});

// it o test permite definir un nuevo test
// expect funcion de JEST que devuelve un "expectation" object sobre el cual podemos invocar algunos matchers, matchers son funciones que nos permiten comparar el valor que esperamos con el valor que recibimos, más sencillamente es lo que estamos ejecutando para hacer la prueba, por ejemplo sum(3,5), estaría probando la funcion sum pasandole 3 y 5 como parametros, y el matcher toBe(8) es lo que estamos comparando, si el resultado de sum(3,5) es igual a 8, entonces el test pasa, si no, el test falla.

// toBe es un matcher que compara valores primitivos, como strings, numbers, booleans, null, undefined, etc.

// Matchers
// JEST tiene distintos matchers para realizar distintas validaciones sobre las funcionalidades que queremos probar:

// toBe: igualdad exacta
// toEqual: verificación recursiva de cada propiedad del objeto o elemento del arreglo
// toBeNull: verifica que el valor sea null
// toBeUndefined: verifica que el valor sea undefined
// toBeDefined: verifica que el valor sea distinto de undefined
// toBeTruthy: verifica que el valor de veracidad sea verdadero sin necesariamente ser literalmente true
// toBeFalse: verifica que el valor de veracidad sea falso sin necesariamente ser literalmente false
// toBeGreaterThan: verifica que el valor sea mayor al de referencia
// toBeGreaterThanOrEqual: verifica que el valor sea mayor o igual al de referencia
// toBeLessThan: verifica que el valor sea menor al de referencia
// toBeLessThanOrEqual: verifica que el valor sea menor o igual al de referencia
// toBeCloseTo: verifica que el número este a pocos decimales de diferencia del valor de referencia
// toMatch: compara contra una expresión regular
// toContain: verifica si dentro de un arreglo existe determinado elemento
// toThrow: verifica si la función arroja un error
