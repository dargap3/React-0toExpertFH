import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from "./useFetchGifs"

describe('useFetchGifs tests', () => {
  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('DBS'));
    const { data, loading } = result.current;
    
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();    
  });

  test('should return an img array and loading in false', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('DBS'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(11);
    expect(loading).toBeFalsy();
  }); 
});
