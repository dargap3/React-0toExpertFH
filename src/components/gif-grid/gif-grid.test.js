import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";

import GifGrid from "./gif-grid";

jest.mock("../../hooks/useFetchGifs");

describe('<GifGrid /> tests', () => {
  const category = "I'm a category";

  test('should show correctly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should show items when you charge images useFetchGifs', () => {
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/cualquier/cosa.jpg',
      title: 'Cualquier cosa'
    },
    {
      id: 'ABdC',
      url: 'https://localhost/cualquier/cosa.jpg',
      title: 'Cualquier cosa'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
  
});
