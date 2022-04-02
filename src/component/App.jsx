import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateNote from "./CreateNote";

function App() {

  //Set empty array to store notes pass from input box
  const [notes, setNotes] = useState([]);

  //Add note from CreateNote component
  function addNote(note) {
    setNotes((prevNote) => {
      return [...prevNote, note]
    })
  }

  //Delete note from Note component
  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  //Display
  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote}/>
      {/* To iterate the note array and set id key to each note */}
      {notes.map((noteItem, index) => {
        return (
          <Note 
          key={index}
          id={index}
          //Retrieve data from notes
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote} />)
      })}
      <Footer />
    </div>
  );
}

export default App;
