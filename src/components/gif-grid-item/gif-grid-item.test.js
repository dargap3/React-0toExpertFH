import { shallow } from "enzyme";

import GifGridItem from './gif-grid-item.jsx';


describe('<GifGridItem /> tests', () => {
  const title = 'Hola';
  const url = 'https://www.google.com';
  const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

  test('should show <GifGridItem /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a paragraph with title', () => {
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(title);  
  });

  test('should have url and alt same as props', () => {
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('should have animate__fadeIn className', () => {

    const div = wrapper.find('div');
    const className = div.prop('className');

    expect(className.includes('animate__fadeIn')).toBe(true);  
  });  
  
});