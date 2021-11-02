import { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class DisplayModal extends Component {


    thisClick = () => {

    }

    render() {
        return (
            <>
                <Modal>
                    <Modal.Dialog>
                        <Modal.Header >
                            <Modal.Title>AN ERROR HAS OCCURED</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>AN ERROR HAS OCCURED</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.thisClick} variant="secondary">Close</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>
            </>
        )
    }
}

export default DisplayModal