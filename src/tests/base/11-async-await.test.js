import { getImagen } from "../../base/11-async-await"


describe('Pruebas con asyn-await y Fetch', () => {

  test('should return img url', async() => {
    const url = await getImagen();


    expect(url.includes('https://')).toBe(true);    
  });    
})
