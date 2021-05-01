import React from 'react';

function caption(str, num){
  return `${str.slice(0, num)}...`
}
const NoteItem = (props) => (

  <li onClick={props.onClick}>
    <h2>{props.note.title}</h2>
    <p>{caption(props.note.body, 20)}</p>
  </li>
);

export default NoteItem;
