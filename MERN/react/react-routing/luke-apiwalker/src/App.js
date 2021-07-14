
import './App.css';
import NavBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router'
import { useState } from 'react';
import ResultsPeople from './components/resultspeople'
import ResultsPlanets from './components/resultsplanets';
import ResultsStarships from './components/resultsspaceships';

function App() {
  const [appId, setAppId] = useState(0)
  const [appResource, setAppResource] = useState('')
  const updateAppState = (newSearch) => {
    setAppId(newSearch.id)
    setAppResource(newSearch.resource)
  }


  return (
    <div className="App">
      <NavBar newSearch = {updateAppState}/>
      <Router>
        <ResultsPeople path='/search/people/:id'/>
        <ResultsPlanets path='/search/planets/:id'/>
        <ResultsStarships path='/search/starships/:id'/>
      </Router>
    </div>
  );
}

export default App;
