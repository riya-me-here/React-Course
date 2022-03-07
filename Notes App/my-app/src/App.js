import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { data } from "./data";
import Split from "react-split";
import { nanoid } from "nanoid";
import "./index.css";

//sync notes in localStorage
export default function App() {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || [] //lazy state initialization
  );
  const [currentNoteId, setCurrentNoteId] = React.useState(
    // check if the note exits, if it exists then take its id
    (notes[0] && notes[0].id) || ""
  );

  React.useEffect(() => {
    // useEffect hook
    // adding key,value pair in localstorage .
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // creating a new note
  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  // updating a note
  //moving modified notes to the top of the list
  function updateNote(text) {
    setNotes((oldNotes) => {
      //create a new empty array
      const newArray = [];
      //loop over the original array
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];
        if (oldNote.id === currentNoteId) {
          //if the id matches the current note,put the updated note at the beginning of the new array
          newArray.unshift({ ...oldNote, body: text });
        } else {
          newArray.push(oldNote);
        }
      }
      return newArray;
    });
  }

  // deletng a note
  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  }

  // finding a note
  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <main>
      {
        // depending on condition we are rendering split, sidebar, editor component
        notes.length > 0 ? (
          <Split sizes={[30, 70]} direction="horizontal" className="split">
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
            {currentNoteId && notes.length > 0 && (
              <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
            )}
          </Split>
        ) : (
          // this render our first page with button
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button className="first-note" onClick={createNewNote}>
              Create one now
            </button>
          </div>
        )
      }
    </main>
  );
}
