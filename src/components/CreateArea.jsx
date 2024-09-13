import React from "react";
import { useState } from "react";

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handelChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitClick(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handelChange}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={handelChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
