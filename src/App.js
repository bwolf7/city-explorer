import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Main"
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userLocation: ""
    }
  }
  handleChange = (e) => {
    this.setState({ userLocation: e.target.value })
  }

  handleClick = async () => {
    //const url = "url?key=${process.env"
  }

  render() {
    return (
      <>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </>
    )
  }
}

export default App