import React, { useEffect, useState } from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {


  return (
    <ul>
      {/* Render list of notes here... */}
      {props.notes.map(note => ( 
      <NoteItem 
        onClick={() => props.onSelect(note.id)} 
        key={note.id} 
        note={note}
      />
      
      ))}
    </ul>
  );
}

export default NoteList;
