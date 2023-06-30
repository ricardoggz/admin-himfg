import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserContext } from '../contexts'
import { Home, Dashboard }  from '../pages'

export const AppRoutes = ()=>{
    const { user }= useContext(UserContext)
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard/*' element={<Dashboard />}/>
        </Routes>
    )
}