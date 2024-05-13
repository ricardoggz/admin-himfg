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
    if(users){
        csvStudents=users.map((student)=>(
            {
                reglamento: student.reglamento,
                departamento_receptor: student.departamento_receptor,
                fecha_inicio: student.fecha_inicio,
                fecha_final: student.fecha_final,
                estudiante_nombre: student.estudiante_nombre,
                estudiante_edad:student.estudiante_edad,
                estudiante_genero:student.estudiante_genero,
                estudiante_estado_civil: student.estudiante_estado_civil,
                estudiante_fecha_nacimiento : student.estudiante_fecha_nacimiento ,
                estudiante_lugar_nacimiento: student.estudiante_lugar_nacimiento,
                estudiante_idiomas :student.estudiante_idiomas ,
                estudiante_domicilio : student.estudiante_domicilio,
                estudiante_codigo_postal: student.estudiante_codigo_postal,
                estudiante_alcaldia:student.estudiante_alcaldia,
                estudiante_ciudad: student.estudiante_ciudad,
                estudiante_pais: student.estudiante_pais,
                estudiante_telefono_particular: student.estudiante_telefono_particular,
                estudiante_telefono_casa: student.estudiante_telefono_casa,
                estudiante_email: student.estudiante_email,
                estudiante_escuela: student.estudiante_escuela,
                estudiante_carrera: student.estudiante_carrera,
                estudiante_promedio: student.estudiante_promedio,
                estudiante_contacto_escuela: student.estudiante_contacto_escuela,
                estudiante_fotografia: `https://archivos.him.edu.mx/inscripciones-pre-grado/${student.estudiante_fotografia}`,
                estudiante_calificaciones: `https://archivos.him.edu.mx/inscripciones-pre-grado/${student.estudiante_calificaciones}`,
                estudiante_certificado_medico: `https://archivos.him.edu.mx/inscripciones-pre-grado/${student.estudiante_certificado_medico}`,
                estudiante_oficio_solicitacion: `https://archivos.him.edu.mx/inscripciones-pre-grado/${student.estudiante_oficio_solicitacion}`,
                estudiante_oficio_aceptacion: `https://archivos.him.edu.mx/inscripciones-pre-grado/${student.estudiante_oficio_aceptacion}`,
                estudiante_nombre_aceptacion: student.estudiante_nombre_aceptacion
            } 
        ))
    }
    return (
        <>
            <div className="d-flex justify-content-center pb-5">
                <h1>Inscripciones pregrado</h1>
            </div>
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
                                        <a
                                        href={`https://archivos.him.edu.mx/inscripciones-pre-grado/${user.estudiante_fotografia}`}
                                        target="_blank"
                                        >
                                            Descargar
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                        href={`https://archivos.him.edu.mx/inscripciones-pre-grado/${user.estudiante_calificaciones}`}
                                        target='_blank'
                                        >
                                            Descargar
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                        href={`https://archivos.him.edu.mx/inscripciones-pre-grado/${user.estudiante_certificado_medico}`}
                                        target='_blank'
                                        >
                                            Descargar
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                        href={`https://archivos.him.edu.mx/inscripciones-pre-grado/${user.estudiante_oficio_solicitacion}`}
                                        target='_blank'
                                        >
                                            Descargar
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                        href={`https://archivos.him.edu.mx/inscripciones-pre-grado/${user.estudiante_oficio_aceptacion}`}
                                        target="_blank"
                                        >
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