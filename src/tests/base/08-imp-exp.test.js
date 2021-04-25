import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones de Héroes', () => {

  test('should return a hero by ID', () => {

    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find( h => h.id === id);

    expect(heroe).toEqual(heroeData);
    
  });

  test(`should return an undefined si hero doesn't exist`, () => {

    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
    
  });

  test(`should return an array with DC heroes`, () => {

    const owner = 'DC';
    const dcHeroes = getHeroesByOwner(owner);

    const dcHeroesData = heroes.filter(h => h.owner === owner);

    expect(dcHeroes).toEqual(dcHeroesData);
    
  });

  test(`should return an array with Marvel heroes`, () => {

    const owner = 'Marvel';
    const marbelHeroes = getHeroesByOwner(owner);

    expect(marbelHeroes.length).toBe(2);
    
  });
  

});