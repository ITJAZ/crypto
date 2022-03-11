import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm"
import './css/main.scss';
import './css/accordion.scss'
import Nav from './components/Nav';
import Sec1 from './components/Sec1';
import Sec2 from './components/Sec2';
import Sec3 from './components/Sec3';
import bg03 from './images/bg03.png'

import Title from './config/Title';
import {Web3ReactProvider} from '@web3-react/core';
import Web3 from "web3";

function getLibrary(provider){
  return new Web3(provider);
}

function App() {
  let lang = navigator.language;
  let langConfig = Title[lang];

  if(typeof langConfig === 'undefined')
    langConfig = Title['en-US'];

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div style={{
        'backgroundImage' : `url(${bg03})`,
        'backgroundRepeat' : 'no-repeat',
        'backgroundSize' : 'cover',
        'backgroundPosition' : 'center center'
      }}>      
        <Nav titles={langConfig}/>
        <Sec1 titles={langConfig}/>
        <Sec2 titles={langConfig}/>
        <Sec3 titles={langConfig}/>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
