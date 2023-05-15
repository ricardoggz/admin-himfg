import { useState } from 'react'
import {Button, Modal} from 'react-bootstrap'

export const DeleteModal=()=>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>¿Seguro que desea eliminar este curso?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary">Sí, eliminar</Button>
        </Modal.Footer>
      </Modal>
  );
}