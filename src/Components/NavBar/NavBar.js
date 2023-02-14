import { Link } from 'react-router-dom'
import { logOut } from '../../Utilities/users-service'

export default function NavBar({ user, setUser }) {
  function signOut() {
    logOut()
    setUser(null)
  }

  return (
    <nav>
      <span>{user.name}</span>
      &nbsp; | &nbsp;
      <Link to="/notes">Notes</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={() => signOut()}>
        Sign Out
      </Link>
    </nav>
  )
}
