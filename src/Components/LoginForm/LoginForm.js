import { useState } from 'react'

import { login } from '../../Utilities/users-service'
import { indexNotes } from '../../Utilities/notes-api'

export default function LoginForm({ setUser, setNotes }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')

  function handleChange(evt) {
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value,
    })
    setError('')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      // prepare formData to send to API
      const formData = { ...credentials }

      // authenticate user
      const user = await login(formData)
      const notes = await indexNotes()

      // store user data locally
      setUser(user)
      setNotes(notes)
    } catch (error) {
      console.log(error)
      setError('Login failed - Try again later')
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">login</button>
        </form>
        <p className="error-message">{error}</p>
      </div>
    </div>
  )
}
