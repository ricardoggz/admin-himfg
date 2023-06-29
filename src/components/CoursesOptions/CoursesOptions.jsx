import { Link } from "react-router-dom"
import { Dropdown, ListGroup } from "react-bootstrap"
import { Loader } from '../../components'
import { useFetch } from '../../hooks'
import { coursesOptions } from './coursesOptions.module.css'

export const CoursesOptions =()=>{
    const [courses, isLoading] = useFetch({
        url: `${import.meta.env.VITE_BASE_URL}api/courses/all-courses`
    })
    return (
        <section className={`${coursesOptions}`}>
            <h2 className="text-center">
                Selecciona un curso para ver alumnos inscritos
            </h2>
            {
                !isLoading ?
                <ListGroup>
                    {
                        courses.map((course)=>(
                            <ListGroup.Item
                                variant="info"
                                key={course.course_id}>
                                <Link>
                                    {course.course_name}
                                </Link>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
                :
                <Loader />
            }
        </section>
    )
}