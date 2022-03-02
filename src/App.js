import "bootstrap/dist/css/bootstrap.min.css";
import './css/main.css';
import Nav from './components/Nav';
import Sec1 from './components/Sec1';
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
    </div>
  );
}

export default App;
