import React from "react";

function Note(props) {

  //Delete note using id pass from App.js
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <article className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </article>
  );
}

export default Note;
