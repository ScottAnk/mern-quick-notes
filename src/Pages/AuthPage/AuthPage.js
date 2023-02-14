import SignUpForm from '../../Components/SignUpForm/SignUpForm'
import LoginForm from '../../Components/LoginForm/LoginForm'

export default function AuthPage({ setUser }) {
  return (
    <>
      <h2>Auth Page</h2>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </>
  )
}
