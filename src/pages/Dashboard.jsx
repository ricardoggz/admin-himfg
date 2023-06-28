import { useContext} from "react"
import { NavBar, CoursesTable } from "../components"
import { UserContext } from "../contexts/UserContext"

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
                <h1>Enseñanza</h1>
            )
        }
    }
}