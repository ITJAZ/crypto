import './App.css';
import Nav from './components/Nav'
import Sec1 from './components/Sec1';
import background2 from "./images/bg02.png";
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
  return (
    <div className="App" style={AppBackgroundStyle}>
      <Nav/>
      <Sec1/>
    </div>
  );
}

export default App;
