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

export const Pregrade = ()=>{
    const [formData, setFormData] = useState(null)
    const [fileName, setFileName] = useState('')
    const [users, isLoading]= useFetch({
        url: `${import.meta.env.VITE_BASE_URL}api/inscriptions/all-pregrade-inscriptions`
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
                <h1>Inscripciones pregrado</h1>
            </div>
            <Table variant="success" responsive striped>
                <thead className="table-dark">
                <tr>
                    <th>Número de inscripción</th>
                    <th>Acepta reglamento</th>
                    <th>Servicio o departamento receptor</th>
                    <th>Fecha de inicio</th>
                    <th>Fecha de término</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Sexo</th>
                    <th>Estado civil</th>
                    <th>Fecha de nacimiento</th>
                    <th>Lugar de nacimiento</th>
                    <th>Idiomas que habla</th>
                    <th>Domicilio permanente</th>
                    <th>Código postal</th>
                    <th>Alcaldía / municipio</th>
                    <th>Ciudad</th>
                    <th>País</th>
                    <th>Teléfono particular</th>
                    <th>Teléfono de casa</th>
                    <th>Correo elctrónico</th>
                    <th>Escuela</th>
                    <th>Carrera</th>
                    <th>Promedio</th>
                    <th>Contacto de la escuela</th>
                    <th>Fotografía</th>
                    <th>Calificaciones</th>
                    <th>Certificado médico</th>
                    <th>Oficio de solicitación</th>
                    <th>Oficio de aceptación</th>
                    <th>Nombre de aceptación</th>
                </tr>
                </thead>
                {
                    !isLoading ?
                    <tbody>
                    <tr>
                        {
                            users.map((user)=>(
                                <>
                                    <td>{user.estudiante_id}</td>
                                    <td>{user.reglamento}</td>
                                    <td>{user.departamento_receptor}</td>
                                    <td>{user.estudiante_id}</td>
                                    <td>{user.fecha_inicio}</td>
                                    <td>{user.fecha_final}</td>
                                    <td>{user.estudiante_edad}</td>
                                    <td>{user.estudiante_genero}</td>
                                    <td>{user.estudiante_estado_civil}</td>
                                    <td>{user.estudiante_fecha_nacimiento}</td>
                                    <td>{user.estudiante_lugar_nacimiento}</td>
                                    <td>{user.estudiante_idiomas}</td>
                                    <td>{user.estudiante_domicilio}</td>
                                    <td>{user.estudiante_codigo_postal}</td>
                                    <td>{user.estudiante_alcaldia}</td>
                                    <td>{user.estudiante_ciudad}</td>
                                    <td>{user.estudiante_pais}</td>
                                    <td>{user.estudiante_telefono_particular}</td>
                                    <td>{user.estudiante_telefono_casa}</td>
                                    <td>{user.estudiante_email}</td>
                                    <td>{user.estudiante_escuela}</td>
                                    <td>{user.estudiante_carrera}</td>
                                    <td>{user.estudiante_promedio}</td>
                                    <td>{user.estudiante_contacto_escuela}</td>
                                    <td>
                                        <a href={`https://archivos.him.edu.mx/${user.estudiante_fotografia}`}>
                                            Descargar
                                        </a>
                                    </td>
                                    <td>
                                        <a href={`https://archivos.him.edu.mx/${user.estudiante_calificaciones}`}>
                                            Descargar
                                        </a>
                                    </td>
                                    <td>
                                        <a href={`https://archivos.him.edu.mx/${user.estudiante_certificado_medico}`}>
                                            Descargar
                                        </a>
                                    </td>
                                    <td>
                                        <a href={`https://archivos.him.edu.mx/${user.estudiante_oficio_solicitacion}`}>
                                            Descargar
                                        </a>
                                    </td>
                                    <td>
                                        <a href={`https://archivos.him.edu.mx/${user.estudiante_oficio_aceptacion}`}>
                                            Descargar
                                        </a>
                                    </td>
                                    <td>{user.estudiante_nombre_aceptacion}</td>
                                </>
                            ))
                        }
                    </tr>
                    </tbody>
                    :
                    null
                }
                </Table>
        </>
    )
}