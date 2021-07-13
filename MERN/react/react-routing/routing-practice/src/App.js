import './App.css';
import Header from './components/header'
import {Router} from '@reach/router'
import NumHeader from './components/numheader';
import ColorHeader from './components/colorheader';

function App() {
  return (
    <div className="App">
      <Router>
        <Header path='/' />
        <NumHeader path='/:id' />
        <ColorHeader path='/:id/:color/:backGround'  />
      </Router>
    </div>
  );
}

export default App;
