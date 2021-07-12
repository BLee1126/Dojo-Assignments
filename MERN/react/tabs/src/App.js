import logo from './logo.svg';
import './App.css';
import Tabs from './components/tabs'

function App() {
  return (
    <div className="App">
      <Tabs Tabs =  {{movies: ['Shawshank Redemption', 'The longest yard', 'Waterboy', 'Die Hard', 'Die Hard 2', 'Rush Hour'], animals: ['dogs', 'cats', 'fish', 'frogs', 'gerbils', 'hamsters'], bands: ['fallout boy', 'third eye blind', 'metallica', 'presidents of the united states', 'pink floyd']}}/>
    </div>
  );
}

export default App;
