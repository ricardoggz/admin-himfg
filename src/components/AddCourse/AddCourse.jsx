import { useState } from "react"
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
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Precio:</Form.Label>
                    <Form.Control
                      type="number"
                      autoFocus
                      name='course_price'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>SEDE:</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_place'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>URL de imágen:</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_image'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>URL de PDF (drive):</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_pdf'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Modalidad:</Form.Label>
                    <Form.Control
                      type="number"
                      autoFocus
                      name='modality_id'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Fecha de inicio:</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_start_date'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Fecha de término:</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_finish_date'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Mes:</Form.Label>
                    <Form.Control
                      type="number"
                      autoFocus
                      name='month_id'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Contraseña del curso:</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_password'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Carpeta de VIMEO:</Form.Label>
                    <Form.Control
                      type="number"
                      autoFocus
                      name='course_vimeo_folder'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Número de video en vivo:</Form.Label>
                    <Form.Control
                      type="number"
                      autoFocus
                      name='course_live_video'
                      onChange={onChange}
                    />
                  </Form.Group>
                  {/*<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Link de zoom (opcional):</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_zoom_video'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>ID de reunión de zoom (opcional):</Form.Label>
                    <Form.Control
                      type="number"
                      autoFocus
                      name='course_zoom_id'
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Contraseña de zoom (opcional):</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_zoom_password'
                      onChange={onChange}
                    />
                  </Form.Group>*/}
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>URL del curso:</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name='course_url'
                      onChange={onChange}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handlePutModal}>
                  Cancelar
                </Button>
                <Button variant="success">
                  Agregar nuevo curso
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
}