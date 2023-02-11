import Signup from "./components/Signup";
import Signin from "./components/Signin";
import WeeklySchedule from "./components/WeeklySchedule";
import SignedIn from "./components/SignedIn";
import Home from "./components/Home";
import Admin from "./components/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Create from "./components/Create";
import DaysWorkout from "./components/DaysWorkout";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import PrivateRoutes from "./auth/PrivateRoutes";

function App() {
  const [loggedin, setLoggedIn] = useState();

  useEffect(() => {
    if (Cookies.get("user_id")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar loggedIn={loggedin} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/schedule" element={<WeeklySchedule />}></Route>
            <Route path="/home" element={<SignedIn />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/days" element={<DaysWorkout />}></Route>
          </Route>

          <Route path="/" element={<Home />}></Route>
          <Route
            path="/signin"
            element={<Signin setLoggedIn={setLoggedIn} />}
          ></Route>
          <Route
            path="/signup"
            element={<Signup setLoggedIn={setLoggedIn} />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
