import { useContext, useEffect } from "react"
import { Routes, Route, useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { Inscriptions } from './Inscriptions'
import { UserContext } from "../contexts/UserContext"
import { CoursesTable, NavBar, CoursesOptions, AddCourse } from '../components'

export const Dashboard = ()=>{
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!user) navigate('/')
    },[user])
    if(user){
        if(user.department_id === "1"){
            return (
                <>
                    <NavBar>
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-link">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <AddCourse />
                        </li>
                    </NavBar>
                    <CoursesTable />
                </>
            )
        }
        if(user.department_id === "2"){
            return (
                <>
                    <NavBar>
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-link">
                                Inicio
                            </Link>
                        </li>
                    </NavBar>
                    <Routes>
                        <Route path='curso/:id' element={<Inscriptions />}/>
                        <Route path='/' element={<CoursesOptions />}/>
                    </Routes>
                </>
            )
        }
        if(user.department_id === "3"){
            return (
                <>
                    <NavBar>
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-link">
                                Inicio
                            </Link>
                        </li>
                    </NavBar>
                    <h1>Tesorería</h1>
                </>
            )
        }
    }
}