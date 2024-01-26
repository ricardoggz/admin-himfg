import { useParams } from "react-router-dom"
import { CSVLink } from "react-csv"
import { Table } from "react-bootstrap"
import { useFetch } from '../hooks'
import { Loader } from "../components"
import moment from "moment"

export const Invoices = ()=>{
    const [courses, isLoading]= useFetch({
        url: `${import.meta.env.VITE_BASE_URL}api/payments/all-payments`
    })
    const params = useParams()
    let id = parseInt(params.id)
    let filteredCourses
    let csvStudents = 'Sin alumnos'
    if(courses && params.id){
        filteredCourses = courses.filter((course)=> course.course_id === id)
        csvStudents=filteredCourses.map((student)=>(
            {
                nombre: student.student_name,
                email: student.student_email,
                teléfono: student.student_phone,
                curso: student.course_name,
                monto: `${student.payment_amount}.00 mxn`,
                referencia: student.payment_reference,
                facturacion: student.payment_invoice === 'FACTURACION' ? "Sí" : "No"
            } 
        ))     
    }
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
                    filename="facturacion-alumnos"
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
                    <th>Facturación</th>
                    <th>Referencia de pago</th>
                    <th>Fecha y hora de inscripción</th>
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
                            {
                            !course.student_tax_data ? 
                            <td>
                                Sin documentos
                            </td>
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
                            {
                                course.payment_invoice === 'FACTURACION' ?
                                <td>Sí</td>
                                :
                                <td>No</td>
                            }
                            <td>{course.payment_reference}</td>
                            <td>
                                {
                                    moment(course.payment_date).format('DD/MM/YYYY HH:mm:ss')
                                }
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