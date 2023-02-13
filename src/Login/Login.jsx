import React, { useState } from 'react'
import './login.css';
import { logo } from './import';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db , ref , set } from '../firebase';
import { async } from '@firebase/util';
import { update } from 'firebase/database';

const Login = () => {
    const navigate = useNavigate(); 
    const [ error ,setErrorMsg] = useState('');
    const [ email , setEmail] = useState('');
    const [ password , setPassword] = useState('');
    const [ submitButtonDisabled , setSubmitButtonDisabled ] = useState(false);
    const [ submitButtonDisabled1 , setSubmitButtonDisabled1 ] = useState(false);

    const register = (e) => {
        e.preventDefault();
        const newEntry = {email: email , password:password}
        if ( !newEntry.email | !newEntry.password ){
            console.log(newEntry.email);
            setErrorMsg("Fill All Fields")
            return;
        }
        setErrorMsg('');
        console.log(newEntry);
        setSubmitButtonDisabled1(true);
        // createUserWithEmailAndPassword is used to register or create new user for the login
        createUserWithEmailAndPassword(auth , newEntry.email , newEntry.password).then(
            async (res) => {
                console.log(res);
                const user = res.user
                set (ref(db , '/users/' + user.uid ),{
                    email:email,
                    password:password,
                    last_login : Date.now()
                })
                alert("User Created");
                await updateProfile(user , {
                    displayName: newEntry.email,
                });
                navigate('/login');
                setSubmitButtonDisabled1(false);
            }).catch((err) => { 
                setSubmitButtonDisabled1(false);
                setErrorMsg(err.message);
            });
    }

    const signin = (e) => {
        e.preventDefault();
        const newEntry = {email: email , password:password}
        if ( !newEntry.email | !newEntry.password ){
            console.log(newEntry.email);
            setErrorMsg("Fill All Fields")
            return;
        }
        setErrorMsg('');
        console.log(newEntry);
        setSubmitButtonDisabled(true);
        // here signInWithEmailAndPassword function is used to sign the registered user
        signInWithEmailAndPassword(auth , newEntry.email , newEntry.password).then(
            async (res) => {
                console.log(res);
                const user = res.user;
                // to store the user info in the database
                update (ref(db , '/users/' + user.uid ),{
                    email:email,
                    password:password,
                    last_login : Date.now()
                })
                alert("User Logged In");
                await updateProfile(user , {
                    displayName: newEntry.email,
                });
                navigate('https://anikesh-developer.github.io/auth_login/');
                setSubmitButtonDisabled(false);
            }).catch((err) => {  
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
                // the above catch fucntion is used to show the error to user while filling the login form
            });
    }

  return (
    <div className='login__page'>
            <div className='login__container'>

                <div className='login__logo'>
                    <img src={logo} alt="logo" />
                </div>

                <p>HELLO !</p>

                <h1>SIGN IN</h1>

                <form>
                    <h5>E-Mail</h5>
                    <input type='text' name='email' autoComplete='off' value={email} 
                    onChange = {(e) => setEmail(e.target.value)}
                    />

                    <h5>PASSWORD</h5>
                    <input type="password" name='password' value={password} onChange = {(e) => setPassword(e.target.value)} />
                    <b className='login__error'>{error}</b>
                    <button type='submit'onClick={signin} disabled={submitButtonDisabled}>Sign In</button>
                </form>

                <button type='submit' onClick={register} disabled={submitButtonDisabled1} className='login__register'>Create Your Account</button>

        </div>
    </div>
  )
}

export default Login
