import axios from "axios"
import Swal from "sweetalert2"

export const uploadFile= async({file})=>{
    const formData = new FormData()
    formData.append('pdfFile', file)
    try {
      const response = await axios.post(
        'https://archivos.him.edu.mx/constancias-cursos.php',
        formData,
        {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        })
      if(response.status===200){
        Swal.fire({
            icon:'success',
            title:'Archivo cargado correctamente',
            showCloseButton:true,
            showConfirmButton:false
        })
      }else{
        Swal.fire({
            icon:'error',
            title:'Error al cargar elrchivo, intente nuevamente',
            showCloseButton:true,
            showConfirmButton:false
        })
      }
    } catch (error) {
        console.log(error)
    }
}