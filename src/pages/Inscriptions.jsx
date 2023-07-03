import { useParams } from "react-router-dom"
import { Table } from "react-bootstrap"
import { useFetch } from '../hooks'
import { Loader } from "../components"

export const Inscriptions = ()=>{
    const [courses, isLoading]= useFetch({
        url: `${import.meta.env.VITE_BASE_URL}api/payments/all-payments`
    })
    const params = useParams()
    let id = parseInt(params.id)
    let filteredCourses
    if(courses && params.id) filteredCourses = courses.filter((course)=> course.course_id === id)
    console.log(filteredCourses)
    return (
        <>
            {
                !isLoading
                ?  
                <Table variant="success">
                <thead className="table-dark">
                <tr>
                    <th>Nombre de alumno</th>
                    <th>Pago</th>
                    <th>Curso al que se inscribió</th>
                    <th>Referencia de pago</th>
                </tr>
                </thead>
                <tbody>
                {
                    filteredCourses.length > 0 && params.id ?
                    courses.filter((course)=>course.course_id === id)
                    .map((course, index)=>(
                        <tr key={index}>
                            <td>{course.student_name}</td>
                            <td>
                            {
                                course.payment_successfull.data[0] === 1 ?
                                'Curso Pagado'
                                :
                                ''
                            }
                            </td>
                            <td>{course.course_name}</td>
                            <td>{course.payment_reference}</td>
                        </tr>
                    ))
                    :
                    <h1>Sin alumnos inscritos</h1>
                }
                </tbody>
                </Table>
            :
                <Loader />
            }
        </>
    )
}