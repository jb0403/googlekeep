import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = () => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });

    console.log(note);
  };

  return (
    <>
      <div className="main_note">
        <form>
          <input
            type="text"
            placeholder="Title"
            autoComplete="off"
            name="title"
            value={note.title}
            onChange={InputEvent}
          />
          <textarea
            rows=""
            column=""
            placeholder="write a note..."
            name="content"
            value={note.content}
            onChange={InputEvent}
          >
            {" "}
          </textarea>
          <Button>
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
