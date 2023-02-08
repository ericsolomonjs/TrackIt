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
      return;
    }
    setList([...list, selected]);
  };

  const handleSubmit = () => {
    if (list.length > 0) {
      const groups = {};
      for (let i = 0; i < list.length; i++) {
        groups[`Workout${i}`] = list[i];
      }
      console.log(groups);
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
        {list.map((item) => (
          <p>{item}</p>
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
