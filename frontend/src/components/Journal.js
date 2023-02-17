import React, { useEffect, useState } from "react";
import Note from "./Note";
import "../styles/Journal.css";

export default function Journal() {
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const ops = {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch("http://localhost:8080/user/notes", ops)
      .then((response) => response.json())
      .then((result) => {
        setNotes(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
    const title = noteInput;
    const ops = {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    };

    fetch("http://localhost:8080/user/notes", ops)
      .then((res) => {
        res.json().then((res) => {
          setNotes((prev) => [res, ...prev]);
          setNoteInput("");
        });
      })
      .catch((err) => alert(err));
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
                placeholder="Note Text"
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
          {notes.map((item) => {
            return (
              <Note
                title={item.title}
                description={item.description}
                modalId={makeid(6)}
                key={makeid(6)}
                noteId={item.id}
                setNotes={setNotes}
                notes={notes}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
