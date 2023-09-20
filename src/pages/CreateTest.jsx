import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Container, Button, Form, Modal } from "react-bootstrap"
import { useOnChange } from "../hooks/useOnChange"
import styles from './createTest.module.css'

export const CreateTest = ()=>{
    const [isOpened, setIsOpened] = useState(false)
    const [isTest, setIsTest] = useState(false)
    const [options, setOptions]= useState([])
    const [test, setTest] = useState({
        test_id: Math.floor((Math.random() * 450000) + 450000),
    })
    const showForm = ()=> setIsOpened(!isOpened)
    const handleChange = (evt)=>setTest({
        ...test,
        [evt.target.name]: evt.target.value
    })
    const handleTestSubmit = async(evt)=>{
        evt.preventDefault()
        try {
            const response = await axios.post('http://localhost:3030/api/questions/add-test', test)
            if(response.status===200){
                setIsTest(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleQuestionSubmit = async(evt)=>{
        evt.preventDefault()
        try {
            const response = await axios.post('http://localhost:3030/api/questions/add-question', {
                test_id:test.test_id,
                question_name:test.question_name,
            })
            if(response.status===200){
                setOptions(options.concat([{
                    question_name: test.question_name
                }]))
            }
        } catch (error) {
            console.log(error)
        }
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
                    Crear cuestionario
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
                    <Form.Label>Título de cuestionario:</Form.Label>
                    <Form.Control
                    type="text"
                    name='test_name'
                    onChange={handleChange}
                    autoComplete="off"
                    readOnly={!isTest ? false : true}
                    required
                    />
                    <Button
                    variant="info"
                    type='submit'
                    onClick={handleTestSubmit}
                    className="mt-3"
                    disabled={!isTest ? false : true}
                    >
                        Guardar
                    </Button>
                    </Form.Group>
                </Form>
            }
            {
                !isTest ? null
                :
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Pregunta:</Form.Label>
                    <Form.Control
                    type="text"
                    name='question_name'
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    />
                    <Button
                    variant="info"
                    type='info'
                    onClick={handleQuestionSubmit}
                    className="mt-3"
                    >
                        Guardar pregunta
                    </Button>
                    </Form.Group>
                </Form>
            }
                <div className="mt-5">
                {
                    options.length > 0 ?
                    <>
                        <div className={styles.options}>
                        {options.map((option, i)=>(
                            <>
                                <div key={i} className="border">
                                <span className="text-center">Pregunta: {option.question_name}</span>
                                <br />
                                <ModalOption questionName={option.question_name}/>
                                </div>
                            </>
                        ))}
                        </div>
                        <div className="pt-5">
                            <span className="fs-3">Total: {options.length} pregunta(s)</span>
                        </div>
                    </>
                    :
                    null
                }
            </div>
        </Container>
    )
}

const ModalOption = ({questionName})=>{
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Button variant="success" onClick={()=>setIsOpen(!isOpen)}>
                Agregar opción
            </Button>
            <Modal
            show={isOpen}
            onHide={()=>setIsOpen(!isOpen)}
            backdrop='static'
            >
                <Modal.Header closeButton>Pregunta: {questionName}</Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Opción:</Form.Label>
                    <Form.Control
                    type="text"
                    name='question_name'
                    autoComplete="off"
                    required
                    />
                    <Button
                    variant="info"
                    type='info'
                    className="mt-3"
                    >
                        Guardar opción
                    </Button>
                    </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}