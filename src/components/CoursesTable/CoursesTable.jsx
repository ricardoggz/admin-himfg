import { Table } from "react-bootstrap"
import { useFetch } from '../../hooks'
import { DeleteCourse, PutCourse, Loader } from '../../components'
import { formatDate } from '../../helpers'

export const CoursesTable = ()=>{
    const [courses, isLoading] = useFetch()
    return (
        <>
            {
                !isLoading
                ?
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
                    courses.map((course)=>(
                        <tr key={course.course_id}>
                            <td>{course.course_id}</td>
                            <td>{course.course_name}</td>
                            <td>{formatDate(course.course_start_date)}</td>
                            <td>{formatDate(course.course_finish_date)}</td>
                            <td>
                                <PutCourse propCourse={course} />
                            </td>
                            <td>
                                <DeleteCourse
                                    course_id={course.course_id}
                                />
                            </td>
                        </tr>
                        ))
                }
                </tbody>
                </Table>
            :
                <Loader />
            }
        </>
    )
}