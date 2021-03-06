import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  document.title ="Login";
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false
  })

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo)

    }
  }
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const { displayName, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email
        }
        setLoggedInUser(signedInUser);
        history.replace(from);

      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      })
  }
  const handleFbSignIn = () => {
    firebase.auth().signInWithPopup(fbProvider)
      .then(res => {
        const { displayName, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email
        }
        setLoggedInUser(signedInUser);
        history.replace(from);
        // console.log('fb user after sign in', user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  }
  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          photo: ''
        }
        setUser(signedOutUser);
      })
      .catch(err => {

      });
  }
  const handleSubmit = (e) => {
    // console.log(user.email,user.password)
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);

        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          history.replace(from);
          console.log('sign in user info', res.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  }
  const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    }).then(function () {
      console.log('user name update successfully')
    }).catch(function (error) {
      console.log(error)
    });
  }
  return (
    <div className="App">
      <h1> Login</h1>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
      <label htmlFor="newUser" >New User Sign up </label>
      <br />
      <form onSubmit={handleSubmit}>
        {newUser && <input name="name" onBlur={handleBlur} placeholder=" Your Name" required />}
        <br />
        <input type="text" name="email" onBlur={handleBlur} placeholder=" Your Email Address" required />
        <br />
        <input type="password" name="password" onBlur={handleBlur} placeholder=" Your password" required />
        <br />
        <input type="submit" value={newUser ? 'sign up' : 'sign in'} />
      </form>

      <p style={{ color: 'red' }}>{user.error}</p>
      {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'logged in'} Successfully</p>}
      {<p> Don't have account? <Link to ="/login">Create an account</Link></p>
  }
      {
        user.isSignedIn ? <Button variant="primary" type="submit" onClick={handleSignOut}>Sign out</Button> :
          <Button variant="secondary" type="submit" onClick={handleSignIn}>Continue With Google</Button>
      }
      <br />

      <Button variant="info" type="submit" onClick={handleFbSignIn}> Continue With Facebook</Button>
      {
        user.isSignedIn && <div>
          <p> Welcome, {user.name} </p>
          <p> your email: {user.email} </p>
        </div>
      }
    </div>
  );
}


export default Login;