import { useParams } from "react-router-dom"
import { CSVLink } from "react-csv"
import { Table } from "react-bootstrap"
import { useFetch } from '../hooks'
import { Loader } from "../components"

export const Invoices = ()=>{
    const [courses, isLoading]= useFetch({
        url: `${import.meta.env.VITE_BASE_URL}api/payments/all-payments`
    })
    const params = useParams()
    let id = parseInt(params.id)
    let filteredCourses
    let csvStudents
    if(courses && params.id){
        filteredCourses = courses.filter((course)=> course.course_id === id)
        csvStudents=courses.filter((course)=>course.student_tax_data !== null)
        .map((student)=>(
            {
                nombre: student.student_name,
                email: student.student_email,
                teléfono: student.student_phone,
                curso: student.course_name,
                monto: `${student.payment_amount}.00 mxn`,
                referencia: student.payment_reference
            } 
        ))        
    }
    return (
        <>
            <div className="d-flex justify-content-center pb-5">
                {
                !csvStudents ? null
                :
                <CSVLink
                    className='btn btn-success'
                    data={csvStudents}
                    filename="alumnos"
                    >    
                    Convertir datos a excel
                </CSVLink>}
            </div>
            {
                !isLoading
                ?  
                <Table variant="success" responsive id="table-to-xls">
                <thead className="table-dark">
                <tr>
                    <th>Nombre de alumno</th>
                    <th>Email</th>
                    <th>Curso al que se inscribió</th>
                    <th>Monto pagado</th>
                    <th>Constancia de situacion fiscal</th>
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
                            <td>{course.student_email}</td>
                            <td>{course.course_name}</td>
                            <td>$ {course.payment_amount} mxn</td>
                            {
                            !course.student_tax_data ? null
                            :
                            <td>
                                <a
                                href={`${course.student_tax_data}`}
                                target="_blank"
                                >
                                    Ver documentación
                                </a>
                            </td>
                            }
                            <td>{course.payment_reference}</td>
                            {
                                /*course.student_license ?
                                <td>
                                    <a
                                    href={`https://upload-nodejs.onrender.com/files/${course.student_license}`}
                                    target="_blank"
                                    >
                                        Ver documentación
                                    </a>
                                </td>
                                :
                                <td>Sin documentación</td>*/
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