import './App.css';
import NavBar from './components/NavBar';
import Signup from './components/Signup_alternateOption';
import { Fragment } from 'react';
import WeeklySchedule from './components/WeeklySchedule';

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar className="NavBar"/>
      </header>
    
        <WeeklySchedule className="signup"/>
    
    </>
  );
}

export default App;
