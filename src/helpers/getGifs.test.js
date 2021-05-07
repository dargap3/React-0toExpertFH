import { getGifs } from './getGifs';

describe('Test with getGifts fetch', () => {

  test('should fetch 10 elements', async() => {
    const gifs = await getGifs('DBZ');

    expect(gifs.length).toBe(11);
    
  });
  
  test('should fetch nothing', async() => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
    
  });
  
});
