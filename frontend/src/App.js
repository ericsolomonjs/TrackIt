import Signup from "./components/Signup";
import Signin from "./components/Signin";
import WeeklySchedule from "./components/WeeklySchedule";
import SignedIn from "./components/SignedIn";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Create from "./components/Create";
import DaysWorkout from "./components/DaysWorkout";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/schedule" element={<WeeklySchedule />}></Route>
          <Route path="/main" element={<SignedIn />}></Route>a
          <Route path="/home" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/days" element={<DaysWorkout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
