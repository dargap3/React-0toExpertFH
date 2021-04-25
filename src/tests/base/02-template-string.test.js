import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Prueba en 02-template-strings.js', () => {

  test('should getSaludo return hola diego', () => {

    const nombre = 'Fernando';

    const saludo = getSaludo(nombre);

    expect(saludo).toBe('Hola ' + nombre);
    
  });
  
  test('should getSaludo return hola carlos', () => {

    const saludo = getSaludo();

    expect(saludo).toBe(`Hola Carlos`);
  });
  
});
