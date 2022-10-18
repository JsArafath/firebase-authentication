import './App.css';
import {getAuth, signInWithPopup} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from './Firebase/Firebase.init';

const auth = getAuth(app);
function App() {

  const provider = new GoogleAuthProvider();
  const handlerGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log (user);
    })
    .catch((error)=> {
      console.log ('error', error);
    })
  }
return (
<div className='App'>
<button className='borderr' onClick={handlerGoogleSignIn}> Google Sign In </button>
</div>
  );
}

export default App;

























// import './App.css';
// import {getAuth , GoogleAuthProvider , signInWithPopup} from "firebase/auth";
// import app from './Firebase/Firebase.init';

// const auth = getAuth(app);
// function App() {
//   const provider = new GoogleAuthProvider ();
//   const HandleGoogleSignIn = () => {
//     signInWithPopup(auth, provider)
// .then(result => {
//   const user = result.user;
//   console.log(user);
// })
// .catch(error => {
//   console.log('error:', error);
// })
//     }

// return (
// <div className='App'>
// <button className='borderr' onClick={HandleGoogleSignIn}>
//   Google Sign In
// </button>
// </div>
//   );
// }

// export default App;
