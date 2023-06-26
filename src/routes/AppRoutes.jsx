import { Routes, Route } from 'react-router-dom'
import { Home, Dashboard }  from '../pages'

export const AppRoutes = ()=>{
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
    )
}