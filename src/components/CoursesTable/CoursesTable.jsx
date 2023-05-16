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
                                <PutCourse
                                    course_name={course.course_name}
                                    course_instructor={course.course_instructor}
                                    course_price={course.course_price}
                                    course_place={course.course_place}
                                    course_image={course.course_image}
                                    course_pdf={course.course_pdf}
                                    modality_id={course.modality_id}
                                    course_start_date={course.course_start_date}
                                    course_finish_date={course.course_finish_date}
                                    month_id={course.month_id}
                                    course_password={course.course_password}
                                    course_vimeo_folder={course.course_vimeo_folder}
                                    course_live_video={course.course_live_video}
                                    course_zoom_video={course.course_zoom_video}
                                    course_zoom_id={course.course_zoom_id}
                                    course_zoom_password={course.course_zoom_password}
                                    course_url={course.course_url}
                                />
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