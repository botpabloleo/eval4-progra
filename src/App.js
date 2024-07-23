import React, { useState, useEffect } from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  // Almacenar datos
  useEffect(() => {
    console.log("Fetching notes from localStorage");
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      try {
        const parsedNotes = JSON.parse(storedNotes);
        console.log("Parsed notes:", parsedNotes);
        setNotes(parsedNotes);
      } catch (error) {
        console.error("Error parsing notes from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    if (notes.length === 0) {
      return;
    }
    console.log("Saving notes to localStorage", notes);
    try {
      const json = JSON.stringify(notes);
      localStorage.setItem('notes', json);
    } catch (error) {
      console.error("Error saving notes to localStorage", error);
    }
  }, [notes]);

  const addNote = (note) => {
    const updatedNotes = [...notes, { ...note, id: Date.now() }];
    console.log("Adding note:", updatedNotes);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Simulador de pegarme</h1>
      <NoteForm addNote={addNote} />
      <div className="notes-container">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default App;

