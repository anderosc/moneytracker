import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modals(category, functions) {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => functions(category)} variant="secondary">YES</Button>
          <Button variant="primary">NO</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Modals;