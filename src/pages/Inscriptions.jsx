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
    if(courses && params.id) {
        filteredCourses = courses.filter((course)=> course.course_id === id)
        console.log(courses)
    }
    return (
        <>
            {
                !isLoading
                ?  
                <Table variant="success" responsive>
                <thead className="table-dark">
                <tr>
                    <th>Nombre de alumno</th>
                    <th>Edad</th>
                    <th>Teléfono</th>
                    <th>Email</th>
                    <th>Contraseña de plataforma</th>
                    <th>Grado académico</th>
                    <th>Institución donde trabaja</th>
                    <th>Curso al que se inscribió</th>
                    <th>Nacionalidad</th>
                    <th>Lugar de procedencia</th>
                    <th>Referencia de pago</th>
                    <th>Fotografía de documentación</th>
                </tr>
                </thead>
                <tbody>
                {
                    filteredCourses.length > 0 && params.id ?
                    courses.filter((course)=>course.course_id === id)
                    .map((course, index)=>(
                        <tr key={index}>
                            <td>{course.student_name}</td>
                            <td>{course.student_age} años</td>
                            <td>{course.student_phone}</td>
                            <td>{course.student_email}</td>
                            <td>{course.student_password}</td>
                            <td>{course.student_grade}</td>
                            <td>{course.student_institution}</td>
                            <td>{course.course_name}</td>
                            <td>{course.student_nationality}</td>
                            <td>{course.student_state}</td>
                            <td>{course.payment_reference}</td>
                            {
                                course.student_license ?
                                <td>
                                    <a
                                    href={`https://upload-nodejs.onrender.com/files/${course.student_license}`}
                                    target="_blank"
                                    >
                                        Ver documentación
                                    </a>
                                </td>
                                :
                                <td>Sin documentación</td>
                            }
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