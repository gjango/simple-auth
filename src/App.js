import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Login from './routes/login/login'
import Home from './routes/home/home'

import { AuthProvider } from './contexts/AuthContext'
import AuthRoute from './routes/AuthRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<AuthRoute />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path={'/login'} element={<Login />} />

          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
