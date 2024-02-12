import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth,createUserProfileDocument } from './firebase/firebase.utlis';
//import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        try {
          const userRef = await createUserProfileDocument(userAuth);
          console.log("useref", userRef);
          
          // await  userRef.onSnapshot((snapShot) => {
            this.setState({
              currentUser:  userRef.id })
            // });
          // });
        } catch (error) {
          console.error("Error in onSnapshot:", error);
        }
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth(); // unsubscribe from the auth listener when the component unmounts
    console.log("unmounted");
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
