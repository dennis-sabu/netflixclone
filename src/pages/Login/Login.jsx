import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png' // Assuming you have a Netflix logo image in assets
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth, db } from '../../components/firebase';
import { toast } from 'react-toastify'; // Importing toast for notifications
import {setDoc, doc} from 'firebase/firestore';


const Login = () => {
  const [signState, setSignState] = useState('Sign In');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      toast.success("User registered successfully!", { position: "top-center" });
      setTimeout(() => {
        window.location.href = "/home";
      }, 1500);
      if(user){
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          email: user.email,
          name: name
        });
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.message, { position: "top-center" });
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User signed in successfully!", { position: "top-center" });
      setTimeout(() => {
        window.location.href = "/home";
      }, 1500);
    } catch (err) {
      console.error(err.message);
      toast.error(err.message, { position: "top-center" });
    }
  };

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt='Netflix Logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={signState === 'Sign In' ? handleSignIn : handleSignUp}>
          {signState === 'Sign Up' ? <input type='text' placeholder='Your name'  value={name} onChange={(e)=> setName(e.target.value)} /> :<></>}

          <input type="email" placeholder='Your email' value={email} onChange={(e)=> setEmail(e.target.value)} />
          <input type='password' placeholder='Your password' value={password} onChange={(e)=> setPassword(e.target.value)} />
          <button type='submit'>{signState}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox'/>
              <label htmlFor='remember'>Remember me</label>

            </div>

            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === 'Sign In' ?<p>New to Netflix?<span onClick={()=>{setSignState('Sign Up')}}> Sign up now</span></p> : <p>Already have an account?<span onClick={()=>{setSignState('Sign In')}}> Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login