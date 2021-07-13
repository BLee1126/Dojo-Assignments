import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormWrapper from './components/formwrapper'
import Navbar from './components/navbar'
import Wrapper from './components/wrapper'
import NameContext from './context/NameContext'

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <NameContext.Provider value = {{name, setName}}>
        <Wrapper >
            <Navbar />
            <FormWrapper />
        </Wrapper>
      </NameContext.Provider>
    </div>
  );
}

export default App;
