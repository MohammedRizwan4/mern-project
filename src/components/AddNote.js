import noteContext from '../context/notes/noteContext';
import { useState } from 'react';
import { useContext } from 'react';
import React from 'react';

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote , addNoteAlert } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        addNoteAlert();
        setNote({title: "", description: "", tag: ""});
    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className='mt-5'>
            <h2>Add a Note</h2>
            <div className='container my-3'>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" minLength={5} required id="title" value={note.title} onChange={onchange} name="title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label" >Description</label>
                        <input type="text" className="form-control" minLength={5} required id="description" value={note.description} name='description' onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label" >Tag</label>
                        <input type="text" className="form-control" minLength={5} id="tag" name='tag' value={note.tag} onChange={onchange} />
                    </div>
                    <button disabled={(note.title.length < 5) || (note.description.length<5)} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </div>
    );
}

export default AddNote;
