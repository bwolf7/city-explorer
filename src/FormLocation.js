import { Component } from "react";
import { Form, Button } from "react-bootstrap"

class FormLocation extends Component {
    render() {
        return (

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Choose a Location</Form.Label>
                    <Form.Control type="string" placeholder="Name a Location to start" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Explore!
                </Button>
            </Form>

        )
    }
}

export default FormLocation