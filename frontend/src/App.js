import Signup from "./components/Signup";
import Signin from "./components/Signin";
import WeeklySchedule from "./components/WeeklySchedule";
import SignedIn from "./components/SignedIn";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/schedule" element={<WeeklySchedule />}></Route>
          <Route path="/main" element={<SignedIn />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
