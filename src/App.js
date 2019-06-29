import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/Home";
import { auth } from "./firebase";

class App extends React.Component {
  signInAnonymous = () => {
    auth
      .signInAnonymously()
      .then(usr => {
        console.log("usr");
        console.log(usr.uid);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

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
