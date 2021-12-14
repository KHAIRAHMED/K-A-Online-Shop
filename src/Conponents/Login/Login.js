import React, { useContext, useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, deleteUser, updateProfile } from "firebase/auth";
// import auth from './firebase.config'
import { auth } from './firebase.config';
import { contextApi } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [user, setUser] = useState({})
    const [checkBox, setCheckBox] = useState(false)
    // const [loginUser, setLoginUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useContext(contextApi)
    let navigate = useNavigate();
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/";

    const handleBlur = (e) => {
        let valid = false
        let validUser = { ...user }
        if (e.target.name === "name") {
            validUser[e.target.name] = e.target.value
            setUser(validUser)
        }
        if (e.target.name === "email") {
            valid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(e.target.value)

        }
        else if (e.target.name === "password") {
            valid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value)
        }


        if (valid) {
            validUser[e.target.name] = e.target.value
            setUser(validUser)
        }
    }
    const handleOnSubmit = (e) => {
        const { name, email, password } = user

        if (checkBox && name && email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const successFullUser = {...user}
                    successFullUser.success = true
                    updateName(name)
                    setUser(successFullUser)  
                    idToken()
                    navigate(from, { replace: true });        
                 })
                .catch((error) => {
                    const errorUser = {...user}
                    errorUser.error = error.message
                    setUser(errorUser)
                });
        }
        else if (!checkBox && email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const successFullUser = {...user}
                    successFullUser.success = true
                    setUser(successFullUser)
                    idToken()
                    navigate(from, { replace: true });

                })
                .catch((error) => {
                    const errorUser = {...user}
                    errorUser.error = error.message
                    setUser(errorUser)
                });
        }

        e.preventDefault()
    }
    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const successFullUser = {...user}
                successFullUser.success = true
                setUser(successFullUser)
                idToken()
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorUser = {...user}
                errorUser.error = error.message
                setUser(errorUser)
            });
    }

    useEffect(() => {
       const authChange = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(user)
            // setLoginUser(user)
        });
        return authChange
    })

// delete user
   const deleteHandle = ()=>{
    const user = auth.currentUser;
    
    deleteUser(user).then(() => {
      // User deleted.
      console.log("deleted Success");
    }).catch((error) => {
   console.log(error);
    });
   }

// update name
   const updateName = (name)=>{
    updateProfile(auth.currentUser, {
      displayName:{name}
    })
   }

//    admin id token 
const idToken = ()=>{
    auth.currentUser.getIdToken( true)
    .then(function(idToken) {
        sessionStorage.setItem("token",idToken)
    })
}
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <input type="checkbox" name="" id="checkbox" onClick={() => setCheckBox(!checkBox)} />
                    <label htmlFor="checkbox" >
                        {
                            checkBox ? "Sign Up" : "Log In"
                        }
                    </label>
                </div>
                {
                    checkBox && <div>
                        <input type="text" placeholder="Enter Name" required name="name" onBlur={handleBlur} />  <br />
                    </div>
                }
                <div>
                    <input type="email" placeholder="Enter Email" name="email" onBlur={handleBlur} required /> <br />
                    <input type="password" placeholder="Enter Password" name="password" onBlur={handleBlur} required /> <br />
                </div>


                <input type="submit" value={checkBox?"Sign Up": "Login"}/>
            </form>
            <button onClick={handleGoogleSignIn}>Google Sign In</button> <br />
            <h3>{user?.success?"User Login SuccessFully": user?.error}</h3>

            <button onClick={deleteHandle}>Delete User</button>
        </div>
    );
};

export default Login; <h1>Login</h1>