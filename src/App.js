import "bootstrap/dist/css/bootstrap.min.css";
import style from './css/main.module.css';
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
      <Nav style={style} titles={langConfig}/>
      <Sec1 style={style} titles={langConfig}/>
    </div>
  );
}

export default App;
