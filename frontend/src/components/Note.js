import React, { useEffect, useState } from "react";
import "../styles/Journal.css";
export default function Note(props) {
  const [addDescription, setAddDescription] = useState("");
  const [descriptions, setDescriptions] = useState(props.description);

  const saveNote = () => {
    const appendToNote = "•" + addDescription;
    const noteToSend = descriptions + appendToNote;
    const ops = {
      method: "PUT",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: props.noteId,
        description: noteToSend,
      }),
    };

    fetch("http://localhost:8080/user/notes", ops)
      .then((response) => response.json())
      .then((result) => {
        setDescriptions((prev) => prev + appendToNote);
        setAddDescription("");
        console.log("here");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDelete = () => {
    const ops = {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: props.noteId,
      }),
    };
    fetch("http://localhost:8080/user/notes", ops)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.id);
        console.log(props.notes);
        const newNotes = props.notes.filter((item) => item.id !== result.id);
        props.setNotes(newNotes);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="note-container mt-3">
        <h3>{props.title}</h3>
        <div style={{ fontSize: "1.65rem" }}>
          <i
            className="fa fa-clipboard"
            aria-hidden="true"
            data-bs-toggle="modal"
            data-bs-target={`#${props.modalId}`}
            style={{ marginRight: "15px" }}
          ></i>

          <i
            style={{ transform: "translateY(-2px)" }}
            className="fa fa-trash"
            aria-hidden="true"
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <div
        className="modal fade"
        id={props.modalId}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <input
                  id="addNote"
                  style={{ width: "100%" }}
                  value={addDescription}
                  onChange={(e) => setAddDescription(e.target.value)}
                  type="text"
                  required
                  placeholder="Enter subnotes here"
                />
              </form>

              {descriptions.split("•").map((item, i) => {
                return (
                  <div key={i} className="note">
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveNote}
              >
                Add Subnote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
