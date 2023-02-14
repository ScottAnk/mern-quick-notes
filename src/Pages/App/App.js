import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import NoteListPage from '../NoteListPage/NoteListPage'
import NavBar from '../../Components/NavBar/NavBar'

import { getUser } from '../../Utilities/users-service'

function App() {
  const [user, setUser] = useState(getUser())
  const [notes, setNotes] = useState([])

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Navigate to="/notes" />} />
            <Route
              path="/notes"
              element={<NoteListPage notes={notes} setNotes={setNotes} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} setNotes={setNotes} />
      )}
    </div>
  )
}

export default App
