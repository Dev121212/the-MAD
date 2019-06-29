import React from 'react';
import logo from './logo.svg';
import './App.css';
import { auth } from './firebase';


class App extends React.Component{

  signInAnonymous = () => {
    auth.signInAnonymously().then((usr) => {
      console.log('usr');
      console.log(usr.uid);

    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
    });
  }

  componentDidMount(){
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
