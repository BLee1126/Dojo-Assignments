import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main'
import AuthorAdd from './views/AuthorAdd'
import AuthorEdit from './views/AuthorEdit'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/'/>
        <AuthorAdd path='/authors/add' />
        <AuthorEdit path='/authors/edit/:_id' />
      </Router>
    </div>
  );
}

export default App;
