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
      forecast: []
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
    console.log(this.state.cityValue);
    try {
      let response = await axios.get(url);
      this.setState({ location: response.data[0] })
    } catch (e) {
      this.setState({ error: true })
      let modifiedResponse = e.response.status;
      this.setState({ errorMessage: modifiedResponse });
      console.log(e.response)
      console.log(this.state.errorMessage)
    }
  }

  requestForecast = async () => {
    let cityName = (this.state.cityValue);
    try {
      let url = `http://localhost:3001/weather?city_name=${cityName}&lat=${this.state.location.lat}&lon=${this.state.location.lon}`;
      let response = await axios.get(url);
      let forecastData = response.data
      this.setState({ forecast: forecastData })
    }
    catch (e) {
      if (e) {
        let modifiedResponse = e.response.status;
        this.setState({ error: true });
        this.setState({ errorStatus: modifiedResponse });
      }
    }
  }



  render() {
    return (
      <>
        <Header></Header>
        <Main handleClick={this.handleClick} handleChange={this.handleChange} cityValue={this.state.cityValue} location={this.location} error={this.state.error} hideError={this.hideError} errorMessage={this.state.errorMessage} ></Main>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=13`} />
            <Card.Title><h1>{this.state.location.display_name}</h1></Card.Title>
            <Card.Text>
              <p>Latitude:{this.state.location.lat} Longitude:{this.state.location.lon}</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <button onClick={this.requestForecast}>Get Forecast</button>
        <div>{this.state.forecast.map(element => { return (<p>{element.date} , {element.description}</p>) })}</div>
        <Footer></Footer>
      </>
    )
  }
}


export default App

