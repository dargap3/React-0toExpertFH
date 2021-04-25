
import { shallow } from 'enzyme';
import PrimeraApp from "../primera-app";


describe('Pruebas en <PrimeraApp />', () => {

  /* test('should show the message, "hola hola"', () => {
    const saludo = 'hola hola';

    const { getByText } = render( <PrimeraApp saludo={ saludo } />);

    expect(getByText(saludo)).toBeInTheDocument();
  }); */

  test('should show <PrimeraApp /> correctly', () => {
    const saludo = "hola hola";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
    
  });

  test('should show subtitle sent it by props', () => {
    const saludo = "hola hola";
    const subtitulo = "soy carola"

    const wrapper = shallow(
        <PrimeraApp 
            saludo={saludo} 
            subtitulo={subtitulo}
        />
    );

    const textoParrafo = wrapper.find('p').text();

    expect(textoParrafo).toBe(subtitulo);  
  })
  
  
})
