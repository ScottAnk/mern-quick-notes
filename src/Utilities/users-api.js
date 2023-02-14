import { getToken } from './users-service'

const BASE_URL = '/api/users'

async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method }
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' }
    options.body = JSON.stringify(payload)
  }

  const token = getToken()
  if (token) {
    options.headers = options.headers || {}
    options.headers.Authorization = `Bearer ${token}`
  }

  const res = await fetch(url, options)
  if (res.ok) {
    return res.json()
  } else {
    throw new Error()
  }
}

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'post', userData)
}

export async function login(userData) {
  return sendRequest(BASE_URL + '/login', 'post', userData)
}

export async function checkToken() {
  return sendRequest(BASE_URL + '/check-token').then(
    (dateStr) => new Date(dateStr)
  )
}
