import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from 'firebase/auth';
import app from './../Firebase/Firebase.init';

const auth = getAuth (app);

const ReactBootstrap = () => {

    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)

        .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
           console.log('error:' , error);
          });
    }


    const [user, setUser] = useState ({})
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
  
    const handleGoogleSignIn = () => {
    signInWithPopup (auth, GoogleProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.log('error:', error);
    })
   }
  
   const handleGoogleSignOut = () => {
    signOut(auth)
    .then(() => {
      setUser({});
    })
    .catch(() => {
      setUser({});
    })
   }
  
   const handleGithubSignIn = () => {
  
    signInWithPopup(auth, GithubProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.log('error:', error);
    })
   }

    return (
        <div>  
            <h1 className='text-primary'> Register Here!! </h1> 
        <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>


    <div className="">
        
        { user.uid ?
        <button className='borderr' onClick={handleGoogleSignOut}> Google Sign Out </button>
          :
        <div>
          <button className='borderr' onClick={handleGoogleSignIn}> Google Sign In </button>
          <button className='borderr' onClick={handleGithubSignIn}> Github Sign In </button>
        </div>
        }

        { user.uid &&
          <div>
            <h3> Name: {user.displayName}</h3>
            <p> Email: {user.email} </p>
            <img className='photo-1' src={user.photoURL} alt="" />
          </div>
        }
        
      </div>
        </div>
    );
};

export default ReactBootstrap;