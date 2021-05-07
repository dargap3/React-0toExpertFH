import { shallow } from "enzyme"

import AddCategory from "./add-category"


describe('test in <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();  
  });

  test('should change value textbox', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';

    input.simulate('change', { target: value});

    console.log(wrapper.find('input').prop('value'))
    
  });

  test('should not post info onSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect(setCategories).not.toHaveBeenCalled();  
  });
  
  test('should call setCategories y clean textbox', () => {
    const value = 'Hola Mundo';

    wrapper.find('input').simulate('change', { target: {value}});

    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find('input').prop('value')).toBe('');  
  });
  
});
