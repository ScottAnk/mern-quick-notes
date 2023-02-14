import { useState } from 'react'

import { createNote } from '../../Utilities/notes-api'

export default function NewNoteForm({ appendNotes }) {
  const [text, setText] = useState('')

  function handleSubmitNote(event) {
    event.preventDefault()

    createNote({ text: text })
      .then((note) => {
        console.log('delete this later ' + note.text)
        appendNotes(note)
      })
      .then(() => setText(''))
  }

  function handleChange(event) {
    setText(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmitNote}>
        <label htmlFor="text">New Note</label>
        <input id="text" value={text} onChange={handleChange} />
        <button disabled={text.length ? false : true}>Save</button>
      </form>
    </div>
  )
}
