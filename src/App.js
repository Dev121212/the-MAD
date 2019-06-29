import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/Home";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
