import { useState } from 'react'
import {Button, Modal} from 'react-bootstrap'
import { deleteCourse } from '../../services'

export const DeleteCourse=({course_id})=>{
  const [isOpen, setIsOpen] = useState(false)
  const handleDeleteModal = () => setIsOpen(!isOpen)
  return (
      <>
        <Button
          variant='danger'
          onClick={handleDeleteModal}
        >
          Eliminar
        </Button>
        <Modal
        show={isOpen}
        onHide={handleDeleteModal}
        backdrop="static"
        keyboard={false}
      >
          <Modal.Header closeButton>
            <Modal.Title>¿Seguro que desea eliminar este curso?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleDeleteModal}>
              No, cancelar
            </Button>
            <Button
              variant="danger"
              onClick={()=>deleteCourse(course_id)}
            >
              Sí, eliminar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  );
}