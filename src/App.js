
import Header from "./components/Header";
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage";
import React from "react";
import DummyPage from "./pages/DummyPage";
import Usage from "./pages/Usage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: 'home'
    }
  }
  handleMenuSelect = (value) => {
    console.log(value);
    this.setState({
      currentSelected: value
    })
  }
  getPage = () => {
    const { currentSelected } = this.state;
    switch (currentSelected) {
      case 'home':
        return <HomePage />
      case 'usage':
        return <Usage />
      case 'settings':
        return <DummyPage key='settings' name="settings" />
      case 'logout':
        return <DummyPage key='logout' name="logout" />
      default:
        break;
    }
  }
  render() {
    return (
      <div className="app">
        <Header onMenuSelect={this.handleMenuSelect} />
        <div className="app-body">
          {this.getPage()}
          {/* <HomePage /> */}
        </div>
        <Footer />
      </div>
    )
  }

}

export default App;
