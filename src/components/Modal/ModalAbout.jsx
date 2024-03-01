import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ModalAbout = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Acerca De</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Este es un Proyecto Educativo,  desarrollado  con la api 'https://api.tvmaze.com'</p>
          <p>Desarrollador: Angel Arano</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalAbout
