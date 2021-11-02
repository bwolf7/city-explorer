import { Component } from "react";
import { Form, Button } from "react-bootstrap"

class FormLocation extends Component {
    render() {
        return (
            <>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Choose a Location</Form.Label>
                        <Form.Control onChange={this.props.handleChange} value={this.props.cityValue} type="string" placeholder="Name a Location to start" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.props.handleClick}>
                        Explore!
                    </Button>
                </Form>
                <p>{this.props.cityValue}</p>
            </>

        )
    }
}

export default FormLocation