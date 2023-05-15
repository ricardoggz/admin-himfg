import { Table, Button } from "react-bootstrap"
import { useFetch } from '../../hooks'

export const CoursesTable = ()=>{
    const [courses, isLoading] = useFetch()
    return (
        <Table variant="success">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Curso</th>
                    <th>Fecha de inicio</th>
                    <th>Fecha de término</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    !isLoading ?
                    <>
                        {
                            !courses ?
                            null
                            :
                            courses.map((course)=>(
                            <tr key={course.course_id}>
                                <td>{course.course_id}</td>
                                <td>{course.course_name}</td>
                                <td>{course.course_start_date}</td>
                                <td>{course.course_finish_date}</td>
                                <td>
                                    <Button variant='success'>
                                        Actualizar
                                    </Button>
                                </td>
                                <td>
                                    <Button variant='danger'>
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                            ))
                        }
                    </>
                    :
                    <p>Cargando información</p>
                }
            </tbody>
        </Table>
    )
}