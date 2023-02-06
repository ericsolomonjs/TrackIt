import './App.css';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import { Fragment } from 'react';

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar/>
      </header>
    <body>
        <Signup/>
    </body>
    </>
  );
}

export default App;
