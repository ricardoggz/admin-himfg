import { useContext} from "react"
import { Routes, Route } from 'react-router-dom'
import { Inscriptions } from './Inscriptions'
import { UserContext } from "../contexts/UserContext"
import { CoursesTable, NavBar, CoursesOptions } from '../components'

export const Dashboard = ()=>{
    const { user } = useContext(UserContext)

    if(user){
        if(user.department_id === "1"){
            return (
                <>
                    <NavBar />
                    <CoursesTable />
                </>
            )
        }
        if(user.department_id === "2"){
            return (
                <>
                    <NavBar />
                    <Routes>
                        <Route path='curso/:id' element={<Inscriptions />}/>
                        <Route path='/' element={<CoursesOptions />}/>
                    </Routes>
                </>
            )
        }
    }
}