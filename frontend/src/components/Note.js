import React from "react";

export default function Note(props) {
  return (
    <>
      <div className="note-container mt-3">
        <h3>{props.noteTitle}</h3>
        <div style={{ fontSize: "2rem" }}>
          <i style={{ marginRight: "15px" }}>{new Date().toLocaleString()}</i>
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
        class="modal fade"
        id={props.modalId}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {props.noteTitle}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <textarea
                style={{ width: "100%" }}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
