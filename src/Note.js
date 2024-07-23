import React from 'react';
import './Note.css';

const Note = ({ note }) => {
  return (
    <div className={`note ${note.isImportant ? 'importante' : ''}`}>
      <h2>{note.title}</h2>
      <p>{note.description}</p>
    </div>
  );
};

export default Note;
