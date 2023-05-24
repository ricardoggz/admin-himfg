import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export const PutCourse = ({ propCourse })=>{
    const [course, setCourse] = useState({
      course_name : propCourse.course_name,
      course_instructor: propCourse.course_instructor,
      course_price: propCourse.course_price,
      course_place: propCourse.course_place,
      course_image: propCourse.course_image,
      course_pdf: propCourse.course_pdf,
      modality_id:propCourse.modality_id,
      course_start_date: propCourse.course_start_date,
      course_finish_date: propCourse.course_finish_date,
      month_id: propCourse.month_id,
      course_password: propCourse.course_password,
      course_vimeo_folder: propCourse.course_vimeo_folder,
      course_live_video:propCourse.course_live_video,
      course_zoom_video: propCourse.course_zoom_video,
      course_zoom_id:propCourse.course_zoom_id,
      course_zoom_password:propCourse.course_zoom_password,
      course_url: propCourse.course_url
    })
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
    const onReset = ()=> setCourse({
      course_name : propCourse.course_name,
      course_instructor: propCourse.course_instructor,
      course_price: propCourse.course_price,
      course_place: propCourse.course_place,
      course_image: propCourse.course_image,
      course_pdf: propCourse.course_pdf,
      modality_id:propCourse.modality_id,
      course_start_date: propCourse.course_start_date,
      course_finish_date: propCourse.course_finish_date,
      month_id: propCourse.month_id,
      course_password: propCourse.course_password,
      course_vimeo_folder: propCourse.course_vimeo_folder,
      course_live_video:propCourse.course_live_video,
      course_zoom_video: propCourse.course_zoom_video,
      course_zoom_id:propCourse.course_zoom_id,
      course_zoom_password:propCourse.course_zoom_password,
      course_url: propCourse.course_url
    })
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
                    value={course.course_name}
                    name='course_name'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Instructor del curso:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course.course_instructor}
                    name='course_instructor'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Precio:</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    value={course.course_price}
                    name='course_price'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>SEDE:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course.course_place}
                    name='course_place'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>URL de imágen:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course.course_image}
                    name='course_image'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>URL de PDF (drive):</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course.course_pdf}
                    name='course_pdf'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Modalidad:</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    value={course.modality_id}
                    name='modality_id'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Fecha de inicio:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={new Date(course.course_start_date).toLocaleDateString()}
                    name='course_start_date'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Fecha de término:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={new Date(course.course_finish_date).toLocaleDateString()}
                    name='course_finish_date'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Mes:</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    value={course.month_id}
                    name='month_id'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Contraseña del curso:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course.course_password}
                    name='course_password'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Carpeta de VIMEO:</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    value={course.course_vimeo_folder}
                    name='course_vimeo_folder'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Número de video en vivo:</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    value={course.course_live_video}
                    name='course_live_video'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Link de zoom (opcional):</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course.course_zoom_video}
                    name='course_zoom_video'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>ID de reunión de zoom (opcional):</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    value={course.course_zoom_id}
                    name='course_zoom_id'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Contraseña de zoom (opcional):</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course.course_zoom_password}
                    name='course_zoom_password'
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>URL del curso:</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    value={course.course_url}
                    name='course_url'
                    onChange={onChange}
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