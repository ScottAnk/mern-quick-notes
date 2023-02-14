import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import NavBar from '../../Components/NavBar/NavBar'

import { getUser } from '../../Utilities/users-service'

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  )
}

export default App
