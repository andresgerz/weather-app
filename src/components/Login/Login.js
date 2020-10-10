import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';

import './Login.css';


// I import the Font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faGoogle

} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faGoogle
)


const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
  
  constructor(props) {
    super(props);
  } 

  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    return(
      <div className="login-container">
        <div className="item">
          <FontAwesomeIcon icon={faGoogle} size="2x" className="text-danger" />
        </div>

        <div className="item">
        {
          user
          ? <Button onClick={signOut}>Sign out</Button>
          : <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        }
        {
          user ?
          <p>Hello, {user.displayName}</p>
          : <p>Please, sign in</p>
        }
        </div>
      </div>
    )
  }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider : new firebase.auth.GoogleAuthProvider(),

};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);