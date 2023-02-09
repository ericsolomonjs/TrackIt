import React, { useState } from "react";
import "../styles/Create.css";
import "../styles/main.css";
import Footer from "./Footer";
import Header from "./Header";

export default function Create() {
  const options = ["Arms", "Legs", "Chest", "Abs"];
  const [selected, setSelected] = useState(options[0]);
  const [list, setList] = useState([]);

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

  const handleSubmit = () => {
    if (list.length > 0) {
      const groups = {};
      for (let i = 0; i < list.length; i++) {
        groups[`Workout${i}`] = list[i];
      }
      //SEND POST REQUEST TO BACKEND HERE
      const ops = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify({
          groups,
        }),
      };

      fetch("http://localhost:8080/user/groups", ops)
        .then((res) => res.json())
        .catch((err) => alert(err, "Server Error"));
    } else {
      alert("You need to select at least one mucle group");
    }
  };

  return (
    <div>
      <Header />
      <h1 style={{ marginTop: "2rem" }}>Select Muslce Groups</h1>
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
      <div className="bottom-section">
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
          style={{ width: "35%" }}
        >
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
}
