import { useState } from 'react'

import NewNoteForm from '../../Components/NewNoteForm/NewNoteForm'
import NoteList from '../../Components/NoteList/NoteList'

export default function NoteListPage({ notes, setNotes }) {
  function appendNotes(note) {
    setNotes([...notes, note])
  }

  return (
    <>
      <NewNoteForm appendNotes={appendNotes} />
      <NoteList notes={notes} />
    </>
  )
}
