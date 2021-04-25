import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {

  test('should return an objet', () => {

    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test('should return another object', () => {

    const nombre = "Diego"
    const user2 = getUsuarioActivo(nombre);

    expect(user2).toEqual({
      uid: 'ABC567',
      username: nombre
    });
    
  });  
})