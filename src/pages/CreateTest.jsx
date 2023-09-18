import { useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Button, Form } from "react-bootstrap"

export const CreateTest = ()=>{
    const [isOpened, setIsOpened] = useState(false)
    const showForm = ()=> setIsOpened(!isOpened)
    const params = useParams()
    const id = parseInt(params.id)
    return (
        <Container>
            <h2 className="text-center pb-5">
                Crear test
            </h2>
            <div className="d-flex justify-content-center pb-5">
                <Button
                variant="success"
                onClick={showForm}
                disabled={!isOpened ? false : true}
                >
                    Agregar pregunta
                </Button>
                {
                    !isOpened ? null
                    :
                    <Button
                    variant="danger"
                    onClick={showForm}
                    >
                        Cancelar
                    </Button>
                }
            </div>
            {
                !isOpened ? null
                :
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Pregunta:</Form.Label>
                    <Form.Control
                    type="text"
                    name='admin_user'
                    required
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Valor:</Form.Label>
                    <Form.Control
                    type="number"
                    min="1"
                    max="10"
                    name='admin_user'
                    required
                    />
                    </Form.Group>
                    <Button>Agregar Pregunta</Button>
                </Form>
            }
        </Container>
    )
}