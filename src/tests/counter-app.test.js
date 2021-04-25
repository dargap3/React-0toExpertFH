import { shallow } from "enzyme";

import CounterApp from '../counter-app';


describe('Pruebas <CounterApp />', () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);  
  });

  test('should show <CounterApp /> correctly', () => {
    expect(wrapper).toMatchSnapshot();  
  });

  test('should show defaultValue = 100', () => {
    const defaultValue = 100;
    const wrapper = shallow(<CounterApp value={defaultValue} />);

    const correctValue = wrapper.find('h2').text();

    expect(correctValue).toBe(`${defaultValue}`);
  });

  test('should increment with button +1', () => {
    wrapper.find('button').at(2).simulate('click');

    const counterText = wrapper.find('h2').text();

    expect(counterText).toBe('1');
  });

  test('should decrement with button -1', () => {
    wrapper.find('button').at(0).simulate('click');

    const counterText = wrapper.find('h2').text();

    expect(counterText).toBe('-1');
  });

  test('should return initial value with reset button', () => {
    const defaultValue = 100;
    const wrapper = shallow(<CounterApp value={defaultValue} />);

    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(2).simulate('click');

    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text();

    expect(counterText).toBe(`${defaultValue}`);
  });
})
