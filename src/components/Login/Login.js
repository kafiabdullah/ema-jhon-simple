import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


function Login() {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    var fbProvider = new firebase.auth.FacebookAuthProvider();


    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                console.log(displayName, email, photoURL);
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: '',
                    success: ''
                }
                setUser(signOutUser);


            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })

    }

    const handleSignInFb = () => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                var credential = result.credential;

                const user = result.user;
                console.log('fb user after sign in', user);

                var accessToken = credential.accessToken;

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;

                // ...
            });
    }

    const handleSubmit = (event) => {
        console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    const newUserInfo = { ...user };
                    newUserInfo.error = ' ';
                    newUserInfo.success = true;
                    setUser(newUserInfo);

                    updateUserName(user.name)
                    setLoggedInUser(newUserInfo);
                    // ...
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;

                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    // ..
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    const newUserInfo = { ...user };
                    newUserInfo.error = ' ';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);

                    // ...
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;

                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }


        event.preventDefault()

    }

    const handleBlur = (event) => {
        console.log(event.target.name, event.target.value);

        // email and password validation method
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);


        }

        if (event.target.name === 'password') {
            const checkPasswordValid = event.target.value.length > 6;

            const checkPasswordNumber = /\d{1}/.test(event.target.value);
            isFieldValid = checkPasswordValid && checkPasswordNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);

        }
    }
    const updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            // Update successful.
            console.log('user name update successfully');
        }).catch(function (error) {
            // An error happened.
            console.log(error);
        });

    }


    return (
        <div className="login-form container">
            {
                user.isSignedIn ? <button onClick={handleSignOut}>Sign Out</button> :
                    <button onClick={handleSignIn}>Sign In</button>

            }
            <br />
            <button onClick={handleSignInFb}>Sign In with Facebook</button>
            {
                user.isSignedIn &&
                <div>
                    <p>Welcome, {user.name}</p>
                    <p>Email: {user.email}</p>
                    <img src={user.photo} alt="" />
                </div>
            }
            <h1>Our Authentication system</h1>

            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">New User SignUp</label>

            <form onSubmit={handleSubmit}>
                {

                    newUser && <input type="text" onBlur={handleBlur} name="name" id="" placeholder="enter your name" />

                }
                <br />
                <input type="email" onBlur={handleBlur} required name="email" id="" placeholder="enter your email" />
                <br />
                <br />
                <input type="password" onBlur={handleBlur} required name="password" placeholder="enter your password" id="" />
                <br /><br />
                <input type="submit" name="signup" value={newUser ? 'Sign Up' : 'Sign In'} />
            </form>
            <p style={{ color: 'red' }}>{user.error}</p>
            {
                user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'logged In'} successfully</p>
            }
        </div>
    );
}

export default Login;
