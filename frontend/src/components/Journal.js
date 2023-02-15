import React, { useEffect, useState } from "react";
import Note from "./Note";
import "../styles/Journal.css";

export default function Journal() {
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);

  const makeid = (length) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };

  const createNote = () => {
    const id = makeid(6);
    const title = noteInput;
    const note = <Note modalId={id} noteTitle={title} />;
    setNotes((prev) => [note, ...prev]);
    fetch("");
  };

  return (
    <>
      <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
        <i className="fa fa-book" aria-hidden="true">
          {" "}
        </i>
        <u>My Jounral</u>
      </p>
      <div className="card">
        <div className="card-body">
          <div className="d-fex flex-row align-items-center">
            <div className="custom-search">
              <input
                type="text"
                id="note-input"
                className="custom-search-input"
                placeholder="Enter your email"
                value={noteInput}
                onChange={(e) => setNoteInput(e.target.value)}
                required
              />
              <button
                className="custom-search-botton"
                type="submit"
                onClick={createNote}
              >
                Add Note
              </button>
            </div>
          </div>
          {notes}
        </div>
      </div>
    </>
  );
}
