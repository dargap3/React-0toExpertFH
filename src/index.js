import ReactDOM from 'react-dom';

import CounterApp from "./counter-app";
/* import PrimeraApp from './primera-app'; */

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp value={0} />, divRoot );
/* ReactDOM.render( <PrimeraApp saludo={"hola hola"} />, divRoot ); */