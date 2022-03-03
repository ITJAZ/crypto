import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm"
import './css/main.css';
import Nav from './components/Nav';
import Sec1 from './components/Sec1';
import Sec2 from './components/Sec2';
import Sec3 from './components/Sec3';

import Title from './config/Title';

function App() {
  let lang = navigator.language;
  let langConfig = Title[lang];

  if(typeof langConfig === 'undefined')
    langConfig = Title['en-US'];

  return (
    <div>
      <Nav titles={langConfig}/>
      <Sec1 titles={langConfig}/>
      <Sec2 titles={langConfig}/>
      <Sec3 titles={langConfig}/>
    </div>
  );
}

export default App;
