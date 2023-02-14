import * as usersAPI from './users-api'

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData)
  localStorage.setItem('token', token)
  return getUser()
}

export async function login(userData) {
  const token = await usersAPI.login(userData)
  localStorage.setItem('token', token)
  return getUser()
}

export function logOut() {
  localStorage.removeItem('token')
}

export function getToken() {
  const token = localStorage.getItem('token')
  if (!token) {
    return null
  }
  const payload = atob(token.split('.')[1])
  const { exp } = JSON.parse(payload)

  // JWT expiration dates are expressed in seconds
  if (exp < Date.now() / 1000) {
    localStorage.removeItem('token')
    return null
  } else {
    return token
  }
}

export function getUser() {
  const token = getToken()
  if (token) {
    const payload = atob(token.split('.')[1])
    const { user } = JSON.parse(payload)
    return user
  } else {
    return null
  }
}

export async function checkToken() {
  return usersAPI.checkToken()
}
