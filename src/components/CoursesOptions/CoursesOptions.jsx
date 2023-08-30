import { Link } from "react-router-dom"
import { Dropdown, ListGroup } from "react-bootstrap"
import { Loader } from '../../components'
import { useFetch } from '../../hooks'
import { coursesOptions } from './coursesOptions.module.css'

export const CoursesOptions =({title})=>{
    const [courses, isLoading] = useFetch({
        url: `${import.meta.env.VITE_BASE_URL}api/courses/all-courses`
    })
    return (
        <section className={`${coursesOptions}`}>
            <h2 className="text-center">
                {title}
            </h2>
            {
                !isLoading ?
                <ListGroup>
                    {
                        courses.map((course)=>(
                            <ListGroup.Item
                                variant="info"
                                key={course.course_id}>
                                <Link to={`curso/${course.course_id}`}>
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