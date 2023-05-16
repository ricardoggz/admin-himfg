import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export const PutCourse = ({
  course_name,
  course_instructor,
  course_price,
  course_place,
  course_image,
  course_pdf,
  modality_id,
  course_start_date,
  course_finish_date,
  month_id,
  course_password,
  course_vimeo_folder,
  course_live_video,
  course_zoom_video,
  course_zoom_id,
  course_zoom_password,
  course_url
})=>{
    const [isOpen, setIsOpen] = useState(false)
    const handlePutModal = () => setIsOpen(!isOpen)

    return (
        <>
          <Button variant="success" onClick={handlePutModal}>
            Actualizar
          </Button>
    
          <Modal
            show={isOpen}
            onHide={handlePutModal}
            className='modal-xl'
            backdrop="static"
          >
            <Modal.Header closeButton>
              <Modal.Title>¿Seguro que desea actualizar este curso?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nombre del curso:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course_name}
                    contentEditable
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Instructor del curso:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course_instructor}
                    contentEditable
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Precio:</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    value={course_price}
                    contentEditable
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>SEDE:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course_place}
                    contentEditable
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>URL de imágen:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course_image}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>URL de PDF (drive):</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course_pdf}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Modalidad:</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    value={modality_id}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Fecha de inicio:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={new Date(course_start_date).toLocaleDateString()}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Fecha de término:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={new Date(course_finish_date).toLocaleDateString()}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Mes:</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    value={month_id}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Contraseña del curso:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course_password}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Carpeta de VIMEO:</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    value={course_vimeo_folder}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Número de video en vivo:</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    value={course_live_video}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Link de zoom (opcional):</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course_zoom_video}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>ID de reunión de zoom (opcional):</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    value={course_zoom_id}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Contraseña de zoom (opcional):</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course_zoom_password}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>URL del curso:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course_url}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handlePutModal}>
                No, cancelar
              </Button>
              <Button variant="success">
                Sí, actualizar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )
}