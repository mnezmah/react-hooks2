import React, { useState, useContext } from 'react'
import NotesContext from '../context/notes-context'

const NoteForm = () => {
  const { dispatch } = useContext(NotesContext)
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


  return (
  <form onSubmit={addNote}>
    <input
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
  )
}

export default NoteForm