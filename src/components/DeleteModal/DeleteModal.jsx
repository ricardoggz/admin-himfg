import { useState } from 'react'
import {Button, Modal} from 'react-bootstrap'

export const DeleteModal=({show, onHide, onClick})=>{
  return (
      <Modal
        show={show}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>¿Seguro que desea eliminar este curso?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClick}>
            No, cancelar
          </Button>
          <Button variant="danger">Sí, eliminar</Button>
        </Modal.Footer>
      </Modal>
  );
}