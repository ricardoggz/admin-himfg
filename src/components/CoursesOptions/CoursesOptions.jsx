import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { InputGroup, Button, Form, ListGroup } from "react-bootstrap"
import { Loader } from '../../components'
import { useFetch } from '../../hooks'
import { coursesOptions } from './coursesOptions.module.css'

export const CoursesOptions =({title})=>{
    const [search, setSearch] = useState([])
    const [courses, isLoading] = useFetch({
        url: `${import.meta.env.VITE_BASE_URL}api/courses/all-courses`
    })
    useEffect(()=>{
        if(!isLoading) setSearch(courses)
    },[isLoading])

    const handleChange=e=>{
        setSearch(e.target.value)
        filteredCourses(e.target.value)
    }
    const filteredCourses=(terminoBusqueda)=>{
        let searchResults=courses.filter((course)=>{
          if(course.course_name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
            return course;
          }
        })
        setSearch(searchResults);
      }
    return (
        <section className={`${coursesOptions}`}>
            <h2 className="text-center">
                {title}
            </h2>
            <div className="container container-fluid">
                <h4 className="text-center pt-5 pb-5">Inserte nombre de curso</h4>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Inserte nombre de curso para su búsqueda"
                    aria-label="Nombre de curso"
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                    
                    />
                    <Button variant="success" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </div>
            {
                !isLoading ?
                <ListGroup>
                    {
                        search && search.map((course)=>(
                            <ListGroup.Item
                                variant="info"
                                className="d-flex justify-content-between"
                                key={course.course_id}>
                                <Link to={`curso/${course.course_id}`}>
                                    {course.course_name}
                                </Link>
                                <Link
                                className="border border-primary btn btn-light"
                                to={`crear-test/${course.course_id}`}
                                >
                                    Agregar test
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