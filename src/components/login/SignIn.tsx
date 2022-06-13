import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'

type Props = {}

const SignIn: React.FC<Props> = (props) => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const onSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        
        if (password && user) {
            createUserWithEmailAndPassword(auth, user, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("****user****");
                    console.log(user);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log('*** sign in error ***');
                    console.log(errorMessage);
                });

            setUser('')
            setPassword('')
        }
    }

    return (
        <form className="credentials-form">
            <div className="container">
                <div className="d-flex flex-row my-3 justify-content-center">
                    <h3>Sign In</h3>
                </div>
                <div className="row my-3 justify-content-center">
                    <input
                        onChange={(e) => setUser(e.target.value)}
                        type="text"
                        name="user"
                        placeholder="User name"
                        value={user}
                    />
                </div>
                <div className="row">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <div className="row">
                    <button className="btn btn-primary my-3" onClick={(e) => onSignIn(e)}>Log In</button><br />
                </div>
            </div>
        </form>
    )
}

export default SignIn