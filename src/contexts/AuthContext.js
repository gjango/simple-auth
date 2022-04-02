import React, { useReducer } from 'react'
import authToken from '../utils/auth'

const AuthContext = React.createContext()

const actions = {
  AUTHENTICATE: 'AUTHENTICATE',
  DEAUTHENTICATE: 'DEAUTHENTICATE',
  CHECK_AUTHENTICATED: 'CHECK_AUTHENTICATED',
}

export const AuthProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case actions.AUTHENTICATE: {
        authToken.set('jwtToken')
        return { isAuthenticated: true }
      }
      case actions.DEAUTHENTICATE: {
        authToken.remove()
        return { isAuthenticated: false }
      }
      default:
        return state
    }
  }

  const [client, dispatch] = useReducer(reducer, {
    isAuthenticated: authToken.get() ? true : false,
  })
  const clientValue = {
    client: client,
    authenticate: () => {
      dispatch({ type: actions.AUTHENTICATE })
    },
    deauthenticate: () => {
      dispatch({ type: actions.DEAUTHENTICATE })
    },
  }
  return <AuthContext.Provider value={clientValue}>{children}</AuthContext.Provider>
}

export default AuthContext
