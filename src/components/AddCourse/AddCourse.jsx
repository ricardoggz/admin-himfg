import { useState } from "react"
import axios from "axios"
import { Button, Modal, Form } from 'react-bootstrap'

export const AddCourse = ()=>{
    const [course, setCourse] = useState(null)
      const [isOpen, setIsOpen] = useState(false)
      const handlePutModal = () => {
        setIsOpen(!isOpen)
        onReset()
      }
      const onChange = (evt)=>{
        setCourse({
          ...course,
          [evt.target.name] : evt.target.value
        })
      }
      const onReset = ()=> setCourse(null)
      const createCourse = async(evt)=>{
        evt.preventDefault()
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}api/courses/add-course`,
            course
          )
          if(response.data.message) alert(response.data.message)
          document.location.reload()          
          return response
        } catch (error) {
          throw new Error(error)
        }
      }
      return (
          <>
            <Button variant="success" onClick={handlePutModal}>
              Agregar Curso
            </Button>
      
            <Modal
              show={isOpen}
              onHide={handlePutModal}
              className='modal-xl'
              backdrop="static"
            >
              <Modal.Header closeButton>
                <Modal.Title>Agregar nuevo curso</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre del curso:</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_name'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Instructor del curso:</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_instructor'
                      onChange={onChange}
                      defaultValue=""
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Precio:</Form.Label>
                    <Form.Control
                      type="number"
                      autoFocus
                      name='course_price'
                      onChange={onChange}
                      defaultValue=""
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>SEDE:</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_place'
                      onChange={onChange}
                      defaultValue=""
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>URL de imágen:</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_image'
                      onChange={onChange}
                      defaultValue=""
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>URL de PDF (drive):</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_pdf'
                      onChange={onChange}
                      defaultValue=""
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Modalidad:</Form.Label>
                    <Form.Select name='modality_id' onChange={onChange}>
                      <option></option>
                      <option value='1'>Presencial</option>
                      <option value='2'>En línea</option>
                      <option value='3'>Híbrida</option>
                    </Form.Select>            
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Fecha de inicio:</Form.Label>
                    <Form.Control
                      type="date"
                      autoFocus
                      name='course_start_date'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Fecha de término:</Form.Label>
                    <Form.Control
                      type="date"
                      autoFocus
                      name='course_finish_date'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Mes de inicio:</Form.Label>
                    <Form.Select name='month_id' onChange={onChange}>
                      <option></option>
                      <option value='0'>Enero</option>
                      <option value='1'>Febrero</option>
                      <option value='2'>Marzo</option>
                      <option value='3'>Abril</option>
                      <option value='4'>Mayo</option>
                      <option value='5'>Junio</option>
                      <option value='6'>Julio</option>
                      <option value='7'>Agosto</option>
                      <option value='8'>Septiembre</option>
                      <option value='9'>Octubre</option>
                      <option value='10'>Noviembre</option>
                      <option value='11'>Diciembre</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Contraseña del curso:</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_password'
                      onChange={onChange}
                      defaultValue=""
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Carpeta de VIMEO:</Form.Label>
                    <Form.Control
                      type="number"
                      autoFocus
                      name='course_vimeo_folder'
                      onChange={onChange}
                      defaultValue=""
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Número de video en vivo:</Form.Label>
                    <Form.Control
                      type="number"
                      autoFocus
                      name='course_live_video'
                      onChange={onChange}
                      defaultValue=""
                    />
                  </Form.Group>                  
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>URL del curso:</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_url'
                      onChange={onChange}
                      defaultValue=""
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handlePutModal}>
                  Cancelar
                </Button>
                <Button variant="success" onClick={createCourse}>
                  Agregar nuevo curso
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
}