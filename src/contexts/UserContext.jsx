import { createContext, useState, useEffect } from "react"

export const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [user, setUser] = useState(null)
    
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')))
    },[])

    const login = (user)=>{
        localStorage.setItem('user', user)
        setUser(JSON.parse(localStorage.getItem('user')))
    }

    const logout = ()=>{
        localStorage.removeItem('user')
        setUser(null)
    }
    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}