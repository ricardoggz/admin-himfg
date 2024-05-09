import { useState } from "react"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'
import { CSVLink } from "react-csv"
import { Table } from "react-bootstrap"
import moment from "moment"
import { useFetch } from '../hooks'
import { Loader } from "../components"
import { uploadFile } from "../services"
import axios from "axios"

export const Posgrade = ()=>{
    const [formData, setFormData] = useState(null)
    const [fileName, setFileName] = useState('')
    const [users, isLoading]= useFetch({
        url: `${import.meta.env.VITE_BASE_URL}api/inscriptions/all-posgrade-inscriptions`
    })
    const randomFileName = ()=> {
        return `${uuidv4()}.pdf`
    }
    console.log(users)
    const params = useParams()
    let id = parseInt(params.id)
    let filteredCourses
    let csvStudents = 'Sin alumnos'
    const handleChange = (evt)=>{
        const newFileName = randomFileName()
        setFileName(newFileName)
        setFormData({
            [evt.target.name]: evt.target.files[0],
            student_constance:`https://archivos.him.edu.mx/constancias-cursos/${newFileName}`
        })
    }
    const handleSubmit = async(id)=>{
        const resp = await axios.put(
            `${import.meta.env.VITE_BASE_URL}api/payments/edit-payment/${id}`,
            {
                payment_degree: formData.student_constance
            }
        )
        if(resp.status===200){
            uploadFile({file: formData.pdfFile, fileName:fileName})
        }
    }
    const thStyle={
        width:'100%',
    }
    return (
        <>
            <div className="d-flex justify-content-center pb-5">
                <h1>Inscripciones posgrado</h1>
            </div>
            <Table variant="success" responsive striped>
                <thead className="table-dark">
                <tr>
                    <th>Número de inscripción</th>
                    <th>Acepta reglamento</th>
                    <th>Fecha de registro</th>
                    <th>Fotografía</th>
                    <th>Nombre</th>
                    <th>Nacionalidad</th>
                    <th>Fecha de nacimiento</th>
                    <th>Especialidad</th>
                    <th>Grado</th>
                    <th>Institución de procedencia</th>
                    <th>Teléfono de jefatura procedente</th>
                    <th>Inicio de periódo</th>
                    <th>Término de periódo</th>
                    <th>Servicio</th>
                    <th>Teléfono particular</th>
                    <th>Teléfono de domicilio</th>
                    <th>Dirección</th>
                    <th>Correo</th>
                    <th>Teléfono de algún familiar</th>
                </tr>
                </thead>
                {
                    !isLoading ?
                    <tbody>
                        {
                            users.map((user)=>(
                                <tr>
                                    <td>{user.estudiante_id}</td>
                                    <td>{user.reglamento}</td>
                                    <td>{user.fecha_registro}</td>                                
                                    <td>
                                        <a
                                        href={`https://archivos.him.edu.mx/inscripciones-pos-grado/${user.estudiante_fotografia}`}
                                        target='_blank'
                                        >
                                            Descargar
                                        </a>
                                    </td>
                                    <td>{user.estudiante_nombre}</td>
                                    <td>{user.estudiante_nacionalidad}</td>
                                    <td>{user.estudiante_fecha_nacimiento}</td>
                                    <td>{user.estudiante_especialidad}</td>
                                    <td>{user.estudiante_grado}</td>
                                    <td>{user.estudiante_institucion_procedencia}</td>
                                    <td>{user.telefono_jefatura_procedencia}</td>
                                    <td>{user.fecha_inicio_periodo}</td>
                                    <td>{user.fecha_termino_periodo}</td>
                                    <td>{user.estudiante_servicio}</td>
                                    <td>{user.estudiante_telefono_celular}</td>
                                    <td>{user.estudiante_telefono_fijo}</td>
                                    <td>{user.estudiante_domicilio}</td>
                                    <td>{user.estudiante_correo}</td>
                                    <td>{user.estudiante_telefono_familiar}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    :
                    null
                }
                </Table>
        </>
    )
}