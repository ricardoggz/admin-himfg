import { Spinner, Container } from "react-bootstrap"

export const Loader =()=>{
    return (
       <Container fluid className="p-4 row justify-content-center">
         <Spinner animation="border" />
       </Container>
    )
}