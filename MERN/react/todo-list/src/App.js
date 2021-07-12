import './App.css';
import Form from './components/form'
import Results from './components/results'
import { useState } from 'react';
import { Button } from 'react-bootstrap'

function App() {
  const [listofTodos, setTodos] = useState([]);
  const addTodos = newTodo => {
    setTodos([...listofTodos, newTodo])
  }
  const updateList = newList => {
    setTodos(newList)
  }
  const updateStatus = i => {
    listofTodos[i].completed = !listofTodos[i].completed;
    setTodos([...listofTodos])
  }
  return (
    <div className="App">
      <Form newTodo = {addTodos}/>
      <Results myList = {listofTodos} newList = {updateList} updateStatus={updateStatus}/>
    </div>
  );
}

export default App;
