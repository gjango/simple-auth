import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

const AuthRoute = () => {
  const { client } = useContext(AuthContext)

  if (client.isAuthenticated) {
    return <Outlet />
  } else {
    return <Navigate to='/login' />
  }
}

export default AuthRoute
