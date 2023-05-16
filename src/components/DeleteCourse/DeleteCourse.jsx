import { useState } from 'react'
import {Button, Modal} from 'react-bootstrap'

export const DeleteCourse=()=>{
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
            <Button variant="danger">Sí, eliminar</Button>
          </Modal.Footer>
        </Modal>
      </>
  );
}