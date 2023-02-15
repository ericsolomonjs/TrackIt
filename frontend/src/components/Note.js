import React, { useEffect, useState } from "react";

export default function Note(props) {
  const [addDescription, setAddDescription] = useState("");

  const saveNote = () => {};

  return (
    <>
      <div className="note-container mt-3">
        <h3>{props.title}</h3>
        <div style={{ fontSize: "1.65rem" }}>
          <i
            className="fa fa-pencil-square-o"
            data-bs-toggle="modal"
            data-bs-target={`#${props.modalId}`}
            aria-hidden="true"
            style={{ marginRight: "15px" }}
          ></i>

          <i
            style={{ transform: "translateY(-2px)" }}
            className="fa fa-trash"
            aria-hidden="true"
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
              <input
                style={{ width: "100%" }}
                value={addDescription}
                onChange={(e) => setAddDescription(e.target.value)}
                type="text"
              />
              <div>{props.description}</div>
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
                data-bs-dismiss="modal"
                onClick={saveNote}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
