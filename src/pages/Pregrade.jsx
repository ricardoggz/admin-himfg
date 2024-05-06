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
        url: `${import.meta.env.VITE_BASE_URL}api/payments/all-payments`
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
    return (
        <>  
        </>
    )
}