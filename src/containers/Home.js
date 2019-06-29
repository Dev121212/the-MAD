import React from "react";
import DashboardContainer from "../containers/Dashboard";
import { auth, db } from "../firebase";
import firebase from "../firebase";
import GameContainer from "./GameContainer";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnonymous: false,
      uid: "",
      clickCount: 0,
      showGoogleButton: false
    };
  }

  signInAnonymous = () => {
    let dis = this;
    console.log("called", this.state.clickCount);
    dis.setState({
      clickCount: dis.state.clickCount + 1
    });

    if (this.state.clickCount < 2) {
      auth.onAuthStateChanged(function(user) {
        if (user) {
          console.log("logged in");
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          dis.setState({
            isAnonymous: isAnonymous,
            uid: uid
          });
          db.collection("users")
            .doc(uid)
            .set({
              from: "anonymous"
            });
        } else {
          console.log("not logged in");
          auth
            .signInAnonymously()
            .then(usr => {
              console.log("usr");
              console.log(usr.uid);
              db.collection("users")
                .doc(uid)
                .set({
                  from: "anonymous"
                });
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // ...
              console.log(errorCode);
              console.log(errorMessage);
            });
        }
      });
    } else {
      this.setState({
        showGoogleButton: true
      });
    }
  };

  handleGoogleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(async function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        var credential = await firebase.auth.GoogleAuthProvider.credential(
          result.getAuthResponse().id_token
        );

        auth.currentUser.linkAndRetrieveDataWithCredential(credential).then(
          function(usercred) {
            var user = usercred.user;
            console.log("Anonymous account successfully upgraded", user);
          },
          function(error) {
            console.log("Error upgrading anonymous account", error);
          }
        );

        db.collection("users")
          .doc(user.uid)
          .set({
            from: "google"
          });

        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  render() {
    return (
      <div>
        {/* <button
          onClick={this.signInAnonymous}
          disabled={this.state.showGoogleButton}
        >
          Start the Game
        </button>
        {/* <DashboardContainer /> */}
        <h1>is {this.state.isAnonymous}</h1>
        <h1>{this.state.uid}</h1>
        {this.state.showGoogleButton ? (
          <button onClick={this.handleGoogleLogin}>Log in with Google</button>
        ) : null}

        <GameContainer />
      </div>
    );
  }
}

export default Home;
