import React, { useState } from "react";
import "../styles/Journal.css";

export default function Journal() {
  const [newNote, setNewNote] = useState();
  const [notes, setNotes] = useState();
  const [note, setNote] = useState();

  const createNote = () => {
    const note = (
      <div className="note-container">
        <h3>{newNote}</h3>
      </div>
    );
  };

  return (
    <>
      <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
        <i class="fas fa-check-square me-1"></i>
        <u>My Jounral</u>
      </p>
      <div className="card">
        <div className="card-body">
          <div className="d-fex flex-row align-items-center">
            <div className="custom-search">
              <input
                type="text"
                className="custom-search-input"
                placeholder="Enter your email"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
              />
              <button
                className="custom-search-botton"
                type="button"
                onClick={createNote}
              >
                Add Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
