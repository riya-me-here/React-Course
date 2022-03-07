import React from "react";

export default function Sidebar(props) {
  //passing props
  const noteElements = props.notes.map((note, index) => (
    //mapping it to noteElements array
    <div key={note.id}>
      <div
        className={`title ${
          // when a note is selected, we are a selecting value for css to apply style.
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        // setting a current note id when clicked
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">
          {/* //adding note summary title */}
          {note.body.split("\n")[0]}
        </h4>
        <button
          className="delete-btn"
          // getting event from onclick event and passing it on for deleting note also grabbing note id for it
          // as  we are passing note in map above
          onClick={(event) => props.deleteNote(event, note.id)}
        >
          <i className="gg-trash trash-icon"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
