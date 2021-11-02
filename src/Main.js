import { Component } from "react";
import FormLocation from "./FormLocation.js"
import DisplayModal from "./DisplayModal.js";
import Citycard from "./Citycard.js";

class Main extends Component {
    render() {
        return (
            <>
                <FormLocation handleClick={this.props.handleClick} handleChange={this.props.handleChange} cityValue={this.props.cityValue} error={this.props.error} display_name={this.props.location}></FormLocation>
                <Citycard display_name={this.props.location}></Citycard>
                <DisplayModal></DisplayModal>
            </>
        )
    }
}

export default Main