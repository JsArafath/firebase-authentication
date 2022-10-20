import './App.css';
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider} from 'firebase/auth';
import app from './Firebase/Firebase.init';
import { useState } from 'react';
import ReactBootstrap from './Component/ReactBootstrap';

const auth = getAuth(app);

function App() {



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
      
      <div className="">
        <div className='w-50 center mx-auto'>
        <ReactBootstrap></ReactBootstrap>
        </div>

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
    );
  
}

export default App;