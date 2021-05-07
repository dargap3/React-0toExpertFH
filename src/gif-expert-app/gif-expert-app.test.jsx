import { shallow } from "enzyme";

import GifExpertApp from "./gif-expert-app";


describe('<GifExpertApp /> tests', () => {

  test('should show correctly the component', () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();  
  });

  test('should show a list of categories', () => {

    const categories = ['One Punch', ' Dragon Ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
  
});
