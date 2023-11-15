import { useState } from "react"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'
import { CSVLink } from "react-csv"
import { Table } from "react-bootstrap"
import { useFetch } from '../hooks'
import { Loader } from "../components"
import { uploadFile } from "../services"
import axios from "axios"

export const Inscriptions = ()=>{
    const [formData, setFormData] = useState(null)
    const [fileName, setFileName] = useState('sin-nombre')
    const [courses, isLoading]= useFetch({
        url: `${import.meta.env.VITE_BASE_URL}api/payments/all-payments`
    })
    const randomFileName = ()=> {
        let fileName = `${uuidv4()}.pdf`
        return setFileName(fileName)
    }
    const params = useParams()
    let id = parseInt(params.id)
    let filteredCourses
    let csvStudents = 'Sin alumnos'
    if(courses && params.id) {
        filteredCourses = courses.filter((course)=> course.course_id === id)
        csvStudents=filteredCourses.map((student)=>(
            {
                id: student.student_id,
                nombre: student.student_name,
                edad: student.student_age,
                teléfono: student.student_phone,
                email: student.student_email,
                contraseña:student.student_password,
                grado:student.student_grade === "undefined" ? "Sin grado académico" : student.student_grade,
                institucion:student.student_institution,
                curso: student.course_name,
                nacionalidad:student.student_nationality,
                procedencia:student.student_state,
                monto: `${student.payment_amount}.00 mxn`,
                referencia: student.payment_reference
            } 
        ))
    }
    const handleChange = (evt)=>{
        setFormData({
            [evt.target.name]: evt.target.files[0],
            student_constance:`https://archivos.him.edu.mx/constancias-cursos/${fileName}`
        })
        randomFileName()
    }
    const handleSubmit = async(id)=>{
        uploadFile({file: formData.pdfFile, fileName:fileName})
        setFormData({
            //[evt.target.name]: evt.target.files[0],
            student_constance:`https://archivos.him.edu.mx/constancias-cursos/${fileName}`
        })
        const resp = await axios.put(
            `${import.meta.env.VITE_BASE_URL}api/payments/edit-payment/${id}`,
            {
                payment_degree: formData.student_constance
            }
        )
        console.log(resp)
    }
    console.log(formData)
    return (
        <>
            <div className="d-flex justify-content-center pb-5">
                {
                csvStudents && csvStudents.length === 0 ?
                <button disabled className="btn btn-secondary">Sin datos a exportar</button>
                :
                <CSVLink
                    className='btn btn-success'
                    data={csvStudents}
                    filename="inscripcion-alumnos"
                    >    
                    Convertir datos a excel
                </CSVLink>}
            </div>
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
                    <th>Monto pagado</th>
                    <th>Referencia de pago</th>
                    <th>Fotografía de documentación 1era parte</th>
                    <th>Fotografía de documentación 2da parte</th>
                    <th>Subir constancia de asistencia</th>
                    <th>Subir constancia de acreditación</th>
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
                            {
                                course.student_grade === 'undefined'
                                ?
                                <td>Sin grado académico</td>
                                :
                                <td>{course.student_grade}</td>
                            }
                            <td>{course.student_institution}</td>
                            <td>{course.course_name}</td>
                            <td>{course.student_nationality}</td>
                            <td>{course.student_state}</td>
                            <td>
                                {
                                course.payment_amount === 0
                                ?
                                <>
                                $ {course.payment_amount}<br/>(Beca del 100%)
                                </>
                                :
                                <>$ {course.payment_amount} mxn</>
                                }
                            </td>
                            <td>{course.payment_reference}</td>
                            {
                                course.student_license && course.student_license_part_2 ?
                                <>
                                    <td>
                                        <a
                                        href={`${course.student_license}`}
                                        target="_blank"
                                        >
                                            Ver documentación
                                        </a>
                                    </td>
                                    <td>
                                    <a
                                    href={`${course.student_license_part_2}`}
                                    target="_blank"
                                    >
                                        Ver documentación
                                    </a>
                                </td>
                                </>
                                :
                                <>
                                    <td>Sin documentación</td>
                                    <td>Sin documentación</td>
                                </>
                            }
                            <td>
                                <div>
                                    <input
                                        type='file'
                                        name='pdfFile'
                                        required
                                        onChange={handleChange}
                                    />
                                    <button onClick={()=>handleSubmit(course.student_id)}>
                                        Subir archivo
                                    </button>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <input
                                        type='file'
                                        name='pdfFile'
                                        required
                                        onChange={handleChange}
                                    />
                                    <button onClick={()=>handleSubmit(course.student_id)}>
                                        Subir archivo
                                    </button>
                                </div>
                            </td>
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