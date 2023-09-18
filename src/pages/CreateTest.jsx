import { useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Button, Form } from "react-bootstrap"

export const CreateTest = ()=>{
    const [isOpened, setIsOpened] = useState(false)
    const [option, setOption] = useState(null)
    const [options, setOptions] = useState([])
    const showForm = ()=> setIsOpened(!isOpened)
    const handleChange = (evt)=>setOption({
        [evt.target.name]: evt.target.value
    })
    const handleOptionSubmit = (evt)=>{
        evt.preventDefault()
        console.log('submit')
        return setOptions(options.concat([option]))
    }
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
                    <Form.Label>Opciones:</Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    type="text"
                    required
                    name='option_name'
                    onChange={handleChange}
                    />
                    <Button variant="info" type='submit' onClick={handleOptionSubmit}>Agregar opción</Button>
                    </Form.Group>
                    <div className="mt-5">
                        {
                            options.length > 0 ?
                            <>
                                {options.map((option, i)=>(
                                    <div key={i} class="border">
                                        <span>{option.option_name}</span>
                                        <br />
                                        <label>Opción correcta</label>
                                        <br />
                                        <input type='radio' name='option_value'/>
                                    </div>
                                ))}
                            </>
                            :
                            null
                        }
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Valor de pregunta:</Form.Label>
                    <Form.Control
                    type="number"
                    min="1"
                    max="10"
                    name='admin_user'
                    required
                    />
                    </Form.Group>
                    <Button>Guardar Pregunta</Button>
                </Form>
            }
        </Container>
    )
}