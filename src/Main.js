import { Component } from "react";
import FormLocation from "./FormLocation.js"
import DisplayModal from "./DisplayModal.js";
//import Citycard from "./Citycard.js";

class Main extends Component {
    render() {
        return (
            <>
                <FormLocation handleClick={this.props.handleClick} handleChange={this.props.handleChange} cityValue={this.props.cityValue}></FormLocation>
                {/* <Citycard display_name={this.props.location}></Citycard> */}
                <DisplayModal error={this.props.error} hideError={this.props.hideError} errorMessage={this.props.errorMessage}></DisplayModal>
            </>
        )
    }
}

export default Main