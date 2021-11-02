import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Main"
import Header from "./Header";
import Footer from "./Footer";
import Card from "react-bootstrap/Card"
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityValue: '',
      error: false,
      errorMessage: "",
      location: '',

    }
  }
  handleChange = (e) => {
    e.preventDefault()
    this.setState({ cityValue: e.target.value })
  }

  hideError = () => {
    this.setState({ error: false })
  }

  handleClick = async (e) => {
    e.preventDefault()
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;
    console.log(url);
    try {
      let response = await axios.get(url);
      console.log(response.data[0])
      this.setState({ location: response.data[0] })
    } catch (e) {
      this.setState({ error: true })
      this.setState({ errorMessage: Error })
      console.log(this.state.errorMessage)
    }

  }

  render() {
    return (
      <>
        <Header></Header>
        <Main handleClick={this.handleClick} handleChange={this.handleChange} cityValue={this.state.cityValue} location={this.location} error={this.state.error} hideError={this.hideError} ></Main>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title><h1>{this.state.location.display_name}</h1></Card.Title>
            <Card.Text>
              <p>Latitude:{this.state.location.lat} Longitude:{this.state.location.lon}</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <img src="`https://{s}-tiles.locationiq.com/v3/earth/r/{z}/{x}/{y}.vector?key=process.env.REACT_APP_LOCATION_KEY" alt="map" />
        <Footer></Footer>
      </>
    )
  }
}

export default App

//img src="querey is URL"