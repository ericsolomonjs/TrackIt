import React, { useState } from "react";
import "../styles/Create.css";
import "../styles/main.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";
// Axios.defaults.baseURL = "http://localhost:8080";
// Axios.defaults.headers.post["Content-Type"] = "application/json";

export default function Create(props) {
  const options = ["Arms", "Legs", "Chest", "Abs", "Back"];
  const difficultyList = ["Beginner", "Intermediate", "Expert"];
  const [selected, setSelected] = useState(options[0]);
  const [difficulty, setDifficulty] = useState(difficultyList[0]);
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    if (list.includes(selected)) {
      alert("Already selected this muscle group!");
    } else {
      setList([...list, selected]);
    }
  };

  const deleteGroup = (item, idx) => {
    const filteredArray = list.filter((item, index) => index !== idx);
    setList(filteredArray);
  };

  const createSaveGetSchedule = (list) => {
    const params = {
      user_id: Cookies.get("user_id"),
      difficulty: difficulty.toLowerCase(),
    };
    for (let lclGroup of list) {
      params[`${lclGroup.toLowerCase()}`] = true;
    }

    Axios.post("/schedule/create/", params)
      .then((res) => {
        console.log("res: ", res);
        props.setSchedule(res.data);
      })
      .catch((error) => {
        console.error("Create Schedule Request Failed!! : ", error);
      });
  };

  const handleSubmit = () => {
    //create and save and return schedule using list items
    createSaveGetSchedule(list);

    if (list.length > 0) {
      const groups = {};
      for (let i = 0; i < list.length; i++) {
        groups[`Workout${i}`] = list[i];
      }

      Axios.post("/user/groups", {
        groups,
        difficulty,
        id: Cookies.get("user_id"),
      })
        .then(() => {
          navigate("/home");
        })
        .catch((err) => alert(err, "Server Error"));
    } else {
      alert("You need to select at least one mucle group");
    }
  };

  return (
    <div>
      <header>
        <div className="img-container">
          <img className="home-img" src="workout1.jpeg" alt="Snow" />
          <p className="heading-comment">Create Your Custom Workouts</p>
          <Link to="/home">
            <button className="btn btn-primary">Quick Workouts</button>
          </Link>
        </div>
      </header>
      <h1 style={{ marginTop: "2rem" }}>Select Muscle Groups</h1>
      <div className="create-container">
        <div className="create-workout">
          <div>
            <form action="">
              <h3>Select groups you want to target</h3>
              <select
                id="select-muscle-groups"
                className="form-select"
                aria-label="Default select example"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                {options.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
              <br />
              <h3>Select Difficulty</h3>
              <select
                id="select-difficulty"
                className="form-select"
                aria-label="Default select example"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                {difficultyList.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div>
            <button
              onClick={handleClick}
              className="btn btn-primary"
              style={{ width: "150px" }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="bottom-section">
        {list.length > 0 && (
          <>
            <h1 style={{ marginTop: "2rem" }}>Your Selections</h1>
            {list.map((item, idx) => (
              <div key={idx} className="create-alert">
                <div
                  style={{ width: "200px" }}
                  className="alert-secondary"
                  role="alert"
                  key={idx + 1}
                >
                  {item}
                </div>
                <button
                  onClick={(e) => deleteGroup(item, idx)}
                  className="btn btn-primary create-button"
                  key={idx + 2}
                >
                  -
                </button>
              </div>
            ))}
            <button
              onClick={handleSubmit}
              className="btn btn-primary"
              style={{ width: "35%", marginBottom: "25px" }}
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}
