import React, { useState, useEffect } from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  // Cargar datos
  useEffect(() => {
    console.log("Agarrando los notas del almacenamiento local");
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      try {
        const parsedNotes = JSON.parse(storedNotes);
        console.log("Notas cargadas:", parsedNotes);
        setNotes(parsedNotes);
      } catch (error) {
        console.error("Error cargando las notas", error);
      }
    }
  }, []);

  // Guardar datos
  useEffect(() => {
    if (notes.length === 0) {
      return;
    }
    console.log("Agarrando los notas del almacenamiento local", notes);
    try {
      const json = JSON.stringify(notes);
      localStorage.setItem('notes', json);
    } catch (error) {
      console.error("Error guardando las notitas en el almacenamiento local :(", error);
    }
  }, [notes]);

  const addNote = (note) => {
    const updatedNotes = [...notes, { ...note, id: Date.now() }];
    console.log("Añadiendo notas:", updatedNotes);
    setNotes(updatedNotes);
  };

  const clearNotes = () => {
    console.log("Borrando todas las notitas :(");
    setNotes([]);
    localStorage.removeItem('notes');
  };

  return (
    <div className="App">
      <h1>Simulador de pegarme</h1>
      <NoteForm addNote={addNote} clearNotes={clearNotes} />
      <div className="notes-container">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default App;
