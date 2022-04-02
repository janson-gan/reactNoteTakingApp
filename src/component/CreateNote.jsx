import React, { useState } from "react";

function CreateNote(props) {

    //Set state and create an object to store input value
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    //Get value from input box and textarea and store to note object
    function handleChange(e) {
        const {name, value} = e.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    //Add note to note array
    function handleClick(event) {
        props.onAdd(note)
        //Clear form input after submit
        setNote({title: "", content: ""})
        //To prevent form refresh after submit
        event.preventDefault();
    }


    return ( 
        < div >
        <form >
            <input onChange={handleChange} name = "title" placeholder = "Title" value={note.title} />
            <textarea onChange={handleChange} name = "content" placeholder = "Take a note..." rows = "3" value={note.content} />
            <button onClick={handleClick}>Add</button>
        </form>
        </div>
    )
}

export default CreateNote;