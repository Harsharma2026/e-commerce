import React, { useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'


export const AuthContext = React.createContext({})
AuthContext.displayName = 'AuthContext'

function AuthProvider(props) {
    const [userData, setUserData] = useLocalStorage('ecommUser', null)
    const setUserDataHelper = (data) => {
      console.log(data);
      setUserData(data);
    }
    const isAllowedToRole = useCallback(
      (roles) => {
        return roles.includes(userData?.role.name)
      },
      [userData],
    )
  
    const logout = useCallback(() => {
      setUserData(null)
    }, [setUserData])
  
    return <AuthContext.Provider value={{ logout, user: userData, setUser: setUserDataHelper, isAllowedToRole }} {...props} />
  }

  function useAuth() {
    const context = React.useContext(AuthContext)
    if (context === undefined) {
      throw new Error(`useAuth must be used within a AuthProvider`)
    }
    return context
  }
  
export { AuthProvider, useAuth }