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
import Axios from "axios";

function App() {
  const [loggedin, setLoggedIn] = useState(false);
  const [schedule, setSchedule] = useState(null);

  function getSchedule (id) {
    if (id && !schedule) {
      Axios.get("/schedule/", {
        params: {
          user_id: id,
        },
        withCredentials: true,
      })
        .then((res) => {
          setSchedule(res.data[0].schedule);
        })
        .catch((error) => {
          console.error("get schedule error", error);
        });
    }
  }

  useEffect(() => {
    const userId = Cookies.get("user_id");

    //get user
    Axios.get("/user", {
      withCredentials: true,
    }).then((res) => {
      if (Cookies.get("user_id") && res.data) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    //get data in app load for schedules if not in
    getSchedule(userId);
  }, []);

  const homeProps = {userId: Cookies.get("user_id"), getSchedule, schedule, setSchedule};

  return (
    <div>
      <BrowserRouter>
        <NavBar
          loggedIn={loggedin}
          setLoggedIn={setLoggedIn}
          schedule={schedule}
        />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/admin" element={<Admin />}></Route>
            <Route
              path="/schedule"
              key={Math.random(200)}
              element={
                <WeeklySchedule
                  schedule={schedule}
                  setSchedule={setSchedule}
                />
              }
            ></Route>
            <Route path="/home" element={<SignedIn {...homeProps} />}></Route>
            <Route
              path="/create"
              element={<Create schedule={schedule} setSchedule={setSchedule} />}
            ></Route>
            <Route
              path="/days/0"
              element={<DaysWorkout day={0} schedule={schedule} />}
            ></Route>
            <Route
              path="/days/1"
              element={<DaysWorkout day={1} schedule={schedule} />}
            ></Route>
            <Route
              path="/days/2"
              element={<DaysWorkout day={2} schedule={schedule} />}
            ></Route>
            <Route
              path="/days/3"
              element={<DaysWorkout day={3} schedule={schedule} />}
            ></Route>
            <Route
              path="/days/4"
              element={<DaysWorkout day={4} schedule={schedule} />}
            ></Route>
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
