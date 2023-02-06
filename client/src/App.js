import './App.css';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import { Fragment } from 'react';

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar className="NavBar"/>
      </header>
    
        <Signup className="signup"/>
    
    </>
  );
}

export default App;
