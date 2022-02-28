import './App.css';
import Nav from './components/Nav'
import Sec1 from './components/Sec1';
import background2 from "./images/bg02.png";
import Title from './config/Title';
import "bootstrap/dist/css/bootstrap.min.css";

const AppBackgroundStyle = {
  backgroundImage: `url(${background2})`,
  minHeight: '1080px',
  width: '100%',
  zIndex: '-1',
  MsOverflowStyle: 'none',
  scrollbarWidth: 'none'
}

function App() {
  let lang = navigator.language;
  let langConfig = Title[lang];
  
  if(typeof langConfig === 'undefined')
    langConfig = Title['en-US'];

  return (
    <div className="App" style={AppBackgroundStyle}>
      <Nav titles={langConfig}/>
      <Sec1 titles={langConfig}/>
    </div>
  );
}

export default App;
