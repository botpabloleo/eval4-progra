import React, { useState } from 'react';
import './NoteForm.css';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const newNote = {
      title,
      description,
      isImportant,
    };

    console.log("New note submitted:", newNote);

    addNote(newNote);

    setTitle('');
    setDescription('');
    setIsImportant(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <label>
        Importante
        <input
          type="checkbox"
          checked={isImportant}
          onChange={(e) => setIsImportant(e.target.checked)}
        />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default NoteForm;
