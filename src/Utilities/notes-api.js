import { getToken } from './users-service'

export async function createNote(note) {
  const res = await fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ note }),
  })

  if (res.ok) {
    console.log('response status is ok')
    return res.json()
  } else {
    throw new Error()
  }
}

export async function indexNotes() {
  const res = await fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  })

  if (res.ok) {
    return res.json()
  } else {
    throw new Error()
  }
}
