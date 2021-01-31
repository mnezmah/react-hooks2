import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes
    case 'ADD_NOTE':
      return [
        ...state,
        {
          title: action.title,
          body: action.body
        }
      ]
    case 'REMOVE_NOTE':
      return state.filter((note) => note.title !== action.title)
    default:
      return state
  }
}

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_NOTE',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  const removeNote = (title) => {
    dispatch({ type: 'REMOVE_NOTE', title })
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))
    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes })     // setNotes(notesData)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <Note key={note.title}
          note={note}
          noteRemoval={removeNote}
        />
      ))}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input type="text"
          placeholder='Title'
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />
        <textarea
          cols="30"
          placeholder='Content of your note'
          rows="5" value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>add note</button>
      </form>
    </div>
  )
}

const Note = ({ note, noteRemoval }) => {
  useEffect(() => {
    console.log('setting the eff!')

    return () => {
      console.log('Cleaning up eff')
    }
  }, [])

  return (
    <div key={note.title}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => noteRemoval(note.title)}>x</button>
    </div>
  )
}

ReactDOM.render(
  // <React.StrictMode>
    <NoteApp />,
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
