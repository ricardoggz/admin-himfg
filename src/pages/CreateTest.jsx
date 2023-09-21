import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Container, Button, Form, Modal } from "react-bootstrap"
import styles from './createTest.module.css'

export const CreateTest = ()=>{
    const [isOpened, setIsOpened] = useState(false)
    const [isTest, setIsTest] = useState(false)
    const [options, setOptions]= useState([])
    const [questionId, setQuestionId] = useState(null)
    const [test, setTest] = useState({
        test_id: Math.floor((Math.random() * 450000) + 450000),
    })
    const [question, setQuestion] = useState({
        question_id:Math.floor((Math.random() * 450000) + 450000),
        test_id:test.test_id,
        question_name:test.question_name,
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
            const response = await axios.post(
                'http://localhost:3030/api/questions/add-question',
                question
            )
            if(response.status===200){
                setOptions(options.concat([{
                    question_name: test.question_name
                }]))
                setQuestionId(question.question_id)
            }
        } catch (error) {
            console.log(error)
        }
        evt.target.reset()
    }
    const params = useParams()
    const id = parseInt(params.id)
    useEffect(()=>{
        setQuestion({
            question_id:Math.floor((Math.random() * 450000) + 450000),
            test_id:test.test_id,
            question_name:test.question_name,
        })
    },[test])
    return (
        <Container>
            <h2 className="text-center pb-5">   
                Crear cuestionario
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
                !isTest || !isOpened ? null
                :
                <Form onSubmit={handleQuestionSubmit}>
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
                    className="mt-3"
                    >
                        Guardar pregunta
                    </Button>
                    </Form.Group>
                </Form>
            }
            {
                !isTest || !isOpened ? null
                :
                <div className="mt-5">
                {
                    options.length > 0 ?
                    <>
                        <div className={styles.options}>
                        {options.map((option, i)=>(
                            <>
                                <div key={i} className="border border-primary">
                                <span className="text-center">Pregunta: {option.question_name}</span>
                                <br />
                                <ModalOption
                                    questionName={option.question_name}
                                    questionId={questionId}
                                />
                                </div>
                            </>
                        ))}
                        </div>
                        <div className="pt-5 pb-5">
                            <span className="fs-3">Total: {options.length} pregunta(s)</span>
                        </div>
                    </>
                    :
                    null
                }
            </div>
            }
        </Container>
    )
}

const ModalOption = ({questionName, questionId})=>{
    const [options, setOptions]= useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [option, setOption] = useState(null)
    const handleChangeOption = (evt)=>setOption({
        ...option,
        question_id:questionId,
        [evt.target.name]: evt.target.value
    })
    const handleOptionSubmit = async(evt)=>{
        evt.preventDefault()
        try {
            const response = await axios.post(
                'http://localhost:3030/api/questions/add-question-option',
                option
            )
            if(response.status===200){
                setOptions(options.concat([{
                    option_name: option.option_name,
                    option_value:option.option_value
                }]))
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Button variant="info" onClick={()=>setIsOpen(!isOpen)}>
                Agregar opción
            </Button>
                {
                    options.length > 0 ?
                    <div className='pt-3'>
                        {
                            options.map((option, i)=>(
                                <div key={i} className="border">
                                    <span className="text-primary">Opción:</span>
                                    <span>{option.option_name}</span>
                                    <span className="text-primary">Valor:</span>
                                    <span>{option.option_value}</span>
                                    <div className={styles.buttons}>
                                        <UpdateOPtion optionName={option.option_name}/>
                                        <DeleteOption optionName={option.option_name}/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    : null
                }
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
                    name='option_name'
                    autoComplete="off"
                    onChange={handleChangeOption}
                    required
                    />
                    <Form.Label>Valor:</Form.Label>
                    <Form.Control
                    type="number"
                    name='option_value'
                    autoComplete="off"
                    onChange={handleChangeOption}
                    required
                    min='0'
                    max='1'
                    />
                    <Button
                    variant="info"
                    type='info'
                    className="mt-3"
                    onClick={handleOptionSubmit}
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

const UpdateOPtion = ({optionName, questionId})=>{
    const [options, setOptions]= useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [option, setOption] = useState(null)
    const handleChangeOption = (evt)=>setOption({
        ...option,
        //question_id:questionId,
        [evt.target.name]: evt.target.value
    })
    return (
        <>
            <Button variant="primary" onClick={()=>setIsOpen(!isOpen)}>
                <i className="bi bi-pencil-fill"></i>
            </Button>
            <Modal
            show={isOpen}
            onHide={()=>setIsOpen(!isOpen)}
            backdrop='static'
            >
                <Modal.Header closeButton>Actualizar opción "{optionName}"</Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Opción:</Form.Label>
                    <Form.Control
                    type="text"
                    name='option_name'
                    autoComplete="off"
                    onChange={handleChangeOption}
                    required
                    />
                    <Form.Label>Valor:</Form.Label>
                    <Form.Control
                    type="number"
                    name='option_value'
                    autoComplete="off"
                    onChange={handleChangeOption}
                    required
                    min='0'
                    max='1'
                    />
                    <Button
                    variant="info"
                    type='info'
                    className="mt-3"
                    >
                        Actualizar opción
                    </Button>
                    </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

const DeleteOption = ({optionName, questionId})=>{
    const [options, setOptions]= useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [option, setOption] = useState(null)
    const handleChangeOption = (evt)=>setOption({
        ...option,
        //question_id:questionId,
        [evt.target.name]: evt.target.value
    })
    return (
        <>
            <Button variant="danger" onClick={()=>setIsOpen(!isOpen)}>
                <i className="bi bi-trash"></i>
            </Button>
            <Modal
            show={isOpen}
            onHide={()=>setIsOpen(!isOpen)}
            backdrop='static'
            >
                <Modal.Header closeButton>
                    ¿Seguro que desea eliminar la opción "{optionName}"?
                </Modal.Header>
                <Modal.Body>
                    <Button variant="danger" onClick={()=>setIsOpen(!isOpen)}>
                        Si, eliminar
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    )
}