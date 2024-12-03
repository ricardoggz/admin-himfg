import axios from 'axios'
import { Button } from 'react-bootstrap'

export const SendEmail = ({course})=>{
    const handleSubmit = async()=>{
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}api/emails/send-email`, course)
            if(response.data) {
                return alert(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Button variant='success' onClick={handleSubmit}>
                Confirmar documentación
            </Button>
        </>
    )
}